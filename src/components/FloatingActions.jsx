import { useState, useEffect } from 'react';
import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [shareToast, setShareToast] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: `${siteConfig.name} — ${siteConfig.role}`,
      text: `Check out the portfolio of ${siteConfig.name}, ${siteConfig.role}.`,
      url: window.location.href,
    };

    if (navigator.share && window.isSecureContext) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url)
        .then(() => triggerToast('Portfolio link copied!'))
        .catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        triggerToast('Portfolio link copied!');
      }
    } catch {
      triggerToast('Unable to copy link.');
    }
  };

  const triggerToast = (message) => {
    setShareToast(message);
    setTimeout(() => {
      setShareToast('');
    }, 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      {shareToast && (
        <div className="floating-toast" role="status" aria-live="polite">
          <Icon name="check" size={16} />
          <span>{shareToast}</span>
        </div>
      )}

      {/* Floating Action Cluster */}
      <aside className="floating-actions" aria-label="Page quick actions">
        {/* Share Button */}
        <button
          type="button"
          className="floating-btn floating-btn--share"
          onClick={handleShare}
          aria-label="Share this portfolio or copy link"
          title="Share Portfolio"
        >
          <Icon name="share" size={18} />
          <span className="floating-btn__tooltip">Share Portfolio</span>
        </button>

        {/* Back to Top Button */}
        <button
          type="button"
          className={`floating-btn floating-btn--top ${showBackToTop ? 'floating-btn--visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          title="Back to Top"
        >
          <Icon name="arrowUp" size={18} />
          <span className="floating-btn__tooltip">Back to Top</span>
        </button>
      </aside>
    </>
  );
}

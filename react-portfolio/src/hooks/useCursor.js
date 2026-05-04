import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    if (!dot || !ring || !label) return;

    const handleMouseMove = (e) => {
      posRef.current.mx = e.clientX;
      posRef.current.my = e.clientY;
    };

    const updateCursor = () => {
      const { mx, my, rx, ry } = posRef.current;
      
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;

      posRef.current.rx = rx + (mx - rx) * 0.1;
      posRef.current.ry = ry + (my - ry) * 0.1;

      ring.style.left = `${posRef.current.rx}px`;
      ring.style.top = `${posRef.current.ry}px`;
      label.style.left = `${posRef.current.rx}px`;
      label.style.top = `${posRef.current.ry}px`;

      rafRef.current = window.requestAnimationFrame(updateCursor);
    };

    // Bind hover effects
    const interactive = document.querySelectorAll('a, button, .ftab, .chip, .cert-item, .proj-card, .serv-card');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('big');
        const text = el.dataset.label;
        if (text) {
          ring.classList.add('text-mode');
          label.style.opacity = '1';
          label.textContent = text;
        }
      });

      el.addEventListener('mouseleave', () => {
        ring.classList.remove('big', 'text-mode');
        label.style.opacity = '0';
      });
    });

    // Magnetic buttons
    document.querySelectorAll('.mag-btn').forEach((btn) => {
      const wrap = btn.closest('.mag-wrap');
      if (!wrap) return;

      wrap.addEventListener('mousemove', (e) => {
        const r = wrap.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.35;
        const dy = (e.clientY - cy) * 0.35;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });

      wrap.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });

    document.addEventListener('mousemove', handleMouseMove);
    rafRef.current = window.requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return { dotRef, ringRef, labelRef };
};

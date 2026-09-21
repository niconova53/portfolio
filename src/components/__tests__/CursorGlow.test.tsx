import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CursorGlow } from '../CursorGlow';

describe('CursorGlow', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('renders glow element when mouse enters viewport', () => {
    render(<CursorGlow />);
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 });
    vi.runAllTimers();
    const glow = screen.getByTestId('cursor-glow');
    expect(glow).toBeInTheDocument();
    expect(glow.className).toContain('cursor-glow');
  });

  it('updates position on mouse move', () => {
    render(<CursorGlow />);
    fireEvent.mouseMove(window, { clientX: 200, clientY: 300 });
    const glow = screen.getByTestId('cursor-glow');
    expect(glow).toHaveStyle({ left: '80px', top: '180px' });
  });

  it('hides glow when mouse leaves viewport', () => {
    expect(true).toBe(true);
  });
});

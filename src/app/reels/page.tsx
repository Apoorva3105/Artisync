'use client';
import { useEffect, useState, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Heart, ChatCircle, User, Play } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

interface ReelProfile {
  name: string;
  profile_image: string | null;
}
interface ReelProduct {
  id: string;
  title: string;
}

export interface Reel {
  id: number;
  user_id: string;
  product_id: string;
  video_url: string;
  caption: string;
  likes: number;
  created_at: string;
  profiles?: ReelProfile;
  products?: ReelProduct;
}

// ── 3 artisan reels that loop endlessly ──
const BASE_REELS: Reel[] = [
  {
    id: 1,
    user_id: 'u1',
    product_id: 'p01',
    video_url: 'https://videos.pexels.com/video-files/7205821/7205821-sd_960_540_24fps.mp4',
    caption: '🧵 Watch the magic of Banarasi silk weaving — pure gold zari on a traditional handloom in Varanasi! #Artisync #HandloomIndia',
    likes: 2847,
    created_at: '2024-03-01T10:00:00Z',
    profiles: { name: 'Kamala Devi Weavers', profile_image: null },
    products: { id: 'p01', title: 'Banarasi Silk Saree — Crimson Zari' },
  },
  {
    id: 2,
    user_id: 'u2',
    product_id: 'p05',
    video_url: 'https://videos.pexels.com/video-files/4683406/4683406-hd_720_1298_50fps.mp4',
    caption: '🏺 The art of Blue Pottery — see how artisans hand-paint these stunning Jaipur vases using Persian techniques! #BluePottery #Jaipur',
    likes: 1923,
    created_at: '2024-03-05T10:00:00Z',
    profiles: { name: 'Amer Pottery Works', profile_image: null },
    products: { id: 'p05', title: 'Blue Pottery Vase — Jaipur' },
  },
  {
    id: 3,
    user_id: 'u3',
    product_id: 'p03',
    video_url: 'https://videos.pexels.com/video-files/6720710/6720710-hd_1920_1080_25fps.mp4',
    caption: '✨ Kanjivaram silk — the pride of Tamil Nadu weaving tradition. Every thread tells a thousand year old story. #KanjivaramSaree',
    likes: 3412,
    created_at: '2024-03-10T10:00:00Z',
    profiles: { name: 'Rajeswari Silks', profile_image: null },
    products: { id: 'p03', title: 'Kanjivaram Silk Saree — Temple Border' },
  },
];

function buildLoopBatch(startIndex: number, count: number): Reel[] {
  return Array.from({ length: count }, (_, i) => ({
    ...BASE_REELS[(startIndex + i) % BASE_REELS.length],
    // give unique key per list position
    id: startIndex + i + 1,
  }));
}

const ReelsPage = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [likedReels, setLikedReels] = useState<Set<number>>(new Set());
  const sentinelRef = useRef<HTMLDivElement>(null);
  const totalLoadedRef = useRef(0);

  // Initial load — 9 reels (3 loops)
  useEffect(() => {
    setTimeout(() => {
      const initial = buildLoopBatch(0, 9);
      setReels(initial);
      totalLoadedRef.current = 9;
      setInitialLoading(false);
    }, 400);
  }, []);

  // Infinite scroll: load 3 more when sentinel enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            const next = buildLoopBatch(totalLoadedRef.current, 3);
            setReels(prev => [...prev, ...next]);
            totalLoadedRef.current += 3;
            setLoading(false);
          }, 300);
        }
      },
      { threshold: 1 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loading]);

  // Auto play/pause on scroll
  useEffect(() => {
    const videos = document.querySelectorAll('.reel-video');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) { v.play().catch(() => {}); }
          else { v.pause(); }
        });
      },
      { threshold: 0.7 }
    );
    videos.forEach(v => io.observe(v));
    return () => io.disconnect();
  }, [reels]);

  const toggleLike = (id: number) => {
    setLikedReels(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
    setReels(prev => prev.map(r =>
      r.id === id ? { ...r, likes: likedReels.has(id) ? r.likes - 1 : r.likes + 1 } : r
    ));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-2)] flex flex-col items-center py-8">
      <div className="w-full max-w-lg px-4 mb-8">
        <h1 className="text-5xl font-bold font-serif text-[var(--text)]">
          Reels
        </h1>
        <p className="text-[var(--muted)] mt-1">Artisan stories in motion</p>
      </div>

      <div className="w-full max-w-lg flex flex-col gap-8 px-4">
        {initialLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {reels.map((reel, idx) => (
              <div
                key={`${reel.id}-${idx}`}
                className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-1)] shadow-md"
              >
                {/* Header */}
                <div className="flex items-center gap-3 p-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold">
                    {reel.profiles?.name?.[0] || <User className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text)]">
                      {reel.profiles?.name || 'Artisan'}
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      {new Date(reel.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>

                {/* Video */}
                <div className="w-full aspect-[4/5] bg-black relative">
                  <video
                    src={reel.video_url}
                    loop
                    playsInline
                    muted
                    className="reel-video w-full h-full object-cover cursor-pointer"
                    onClick={e => {
                      const v = e.currentTarget;
                      v.paused ? v.play() : v.pause();
                    }}
                    onDoubleClick={() => toggleLike(reel.id)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-white/70" weight="fill" />
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4">
                  <p className="text-[var(--text)] text-sm mb-3">{reel.caption}</p>
                  <div className="flex items-center gap-5">
                    <button
                      className="flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: likedReels.has(reel.id) ? 'var(--primary)' : 'var(--muted)' }}
                      onClick={() => toggleLike(reel.id)}
                    >
                      <Heart
                        className="w-5 h-5 transition-transform hover:scale-125"
                        weight={likedReels.has(reel.id) ? 'fill' : 'regular'}
                      />
                      <span>{reel.likes + (likedReels.has(reel.id) ? 1 : 0)}</span>
                    </button>
                    <Link
                      href={`/product/${reel.product_id}`}
                      className="flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      <ChatCircle className="w-5 h-5" />
                      <span>{reel.products?.title || 'View Product'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Sentinel for infinite scroll */}
            <div ref={sentinelRef} className="h-4" />
            {loading && (
              <div className="flex justify-center py-4">
                <div className="w-6 h-6 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ReelsPage;

import React, { useState } from 'react';

interface ImageUploaderProps {
  label: string;
  currentImage: string;
  onImageChange: (newUrl: string) => void;
  aspectHint?: string;
}

const PRESET_IMAGES = [
  { label: 'Wedding Prints Showcase', url: '/images/wedding-prints-showcase.jpg' },
  { label: 'Xerox Digital Press', url: '/images/xerox-production-press.jpg' },
  { label: 'Lab Operator at Press', url: '/images/lab-operator-press.jpg' },
  { label: 'DN Lab 12+ Specialist Team', url: '/images/dn-lab-team.jpg' },
  { label: 'Commercial Offset Flyer', url: '/images/offset-services-flyer.jpg' },
  { label: 'Hero Production Banner', url: '/images/hero-banner.jpg' },
  { label: 'DN Digital Logo', url: '/images/logo.png' }
];

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  currentImage,
  onImageChange,
  aspectHint
}) => {
  const [mode, setMode] = useState<'url' | 'upload' | 'preset'>('url');
  const [urlInput, setUrlInput] = useState(currentImage);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB limit. Please choose a smaller image.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      onImageChange(base64);
      setUrlInput(base64.substring(0, 50) + '... (uploaded image)');
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onImageChange(urlInput.trim());
    }
  };

  return (
    <div className="space-y-3 bg-surface-container/60 p-4 rounded-xl border border-outline-variant/40">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-on-surface">{label}</label>
        {aspectHint && <span className="text-xs text-on-surface-variant italic">{aspectHint}</span>}
      </div>

      {/* Preview */}
      <div className="flex items-center gap-4">
        <div className="w-24 h-20 rounded-lg overflow-hidden border border-outline-variant/60 bg-surface-container flex-shrink-0 relative group">
          <img
            src={currentImage}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/wedding-prints-showcase.jpg';
            }}
          />
        </div>
        <div className="flex-1 space-y-2">
          {/* Tabs for choosing method */}
          <div className="flex gap-1 bg-surface-container-high/80 p-1 rounded-lg text-xs font-medium w-fit">
            <button
              type="button"
              onClick={() => setMode('url')}
              className={`px-3 py-1 rounded-md transition-colors ${
                mode === 'url' ? 'bg-secondary text-on-secondary shadow-sm' : 'text-on-surface hover:text-secondary'
              }`}
            >
              Image URL
            </button>
            <button
              type="button"
              onClick={() => setMode('upload')}
              className={`px-3 py-1 rounded-md transition-colors ${
                mode === 'upload' ? 'bg-secondary text-on-secondary shadow-sm' : 'text-on-surface hover:text-secondary'
              }`}
            >
              Upload Device Image
            </button>
            <button
              type="button"
              onClick={() => setMode('preset')}
              className={`px-3 py-1 rounded-md transition-colors ${
                mode === 'preset' ? 'bg-secondary text-on-secondary shadow-sm' : 'text-on-surface hover:text-secondary'
              }`}
            >
              DN Presets
            </button>
          </div>

          {/* URL Input */}
          {mode === 'url' && (
            <div className="flex gap-2">
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter image URL (https://... or /images/...)"
                className="flex-1 text-xs px-3 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
              />
              <button
                type="button"
                onClick={handleUrlSubmit}
                className="px-3 py-1.5 bg-secondary text-on-secondary text-xs font-semibold rounded-lg hover:brightness-110"
              >
                Apply
              </button>
            </div>
          )}

          {/* Upload Input */}
          {mode === 'upload' && (
            <div>
              <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/80 text-xs font-medium text-on-surface cursor-pointer hover:bg-surface-container">
                <span className="material-symbols-outlined text-sm text-secondary">cloud_upload</span>
                <span>Select file from computer (JPG, PNG, WebP)</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Presets */}
          {mode === 'preset' && (
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
              {PRESET_IMAGES.map((preset) => (
                <button
                  key={preset.url}
                  type="button"
                  onClick={() => {
                    setUrlInput(preset.url);
                    onImageChange(preset.url);
                  }}
                  className={`text-[11px] px-2.5 py-1 rounded border transition-colors ${
                    currentImage === preset.url
                      ? 'border-secondary bg-secondary-fixed/50 text-on-secondary-fixed font-semibold'
                      : 'border-outline-variant/60 bg-surface-container-lowest text-on-surface hover:border-secondary'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


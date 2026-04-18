import { useState } from 'react';
import { Download } from 'lucide-react';
import { getResumeProfile } from '../../utils/resumeData';

const ResumeDownloadButton = ({
  variant = 'developer',
  className = '',
  onAfterClick,
  children,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const profile = getResumeProfile(variant);

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      const { downloadResumePdf } = await import('../../utils/resumeGenerator');
      await downloadResumePdf(variant);
    } finally {
      setIsGenerating(false);
      onAfterClick?.();
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleDownload}
      disabled={isGenerating}
      aria-label={`Download ${profile.label}`}
      title={`Download ${profile.label}`}
    >
      <Download size={18} />
      {children || (isGenerating ? 'Preparing PDF...' : 'Download Resume')}
    </button>
  );
};

export default ResumeDownloadButton;

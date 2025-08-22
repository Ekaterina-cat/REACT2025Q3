import { useRef, useState, type JSX } from 'react';

interface UploadImageProps {
  error?: string;
  onChange?: (file: File | null) => void;
}

export const UploadImage = ({
  error,
  onChange,
}: UploadImageProps): JSX.Element => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (onChange) {
        onChange(file);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={'avatar'}>Upload image</label>
      <input
        type="file"
        id={'avatar'}
        name={'avatar'}
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        className="hidden"
      />
      <div
        className={`flex items-center justify-between rounded-lg border-2 p-3 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <span className="font-courgette text-xs text-gray-400">
          {fileName || 'File not selected'}
        </span>
        <button
          type="button"
          onClick={handleButtonClick}
          className="font-borel rounded bg-blue-500 px-3 pt-2 text-white hover:bg-blue-600"
        >
          Select file
        </button>
      </div>
      <p className="font-courgette mt-1 text-xs text-gray-500">
        Allowed formats: PNG, JPEG. Maximum size: 2MB
      </p>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

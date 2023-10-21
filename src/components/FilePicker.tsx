import { CustomButton } from './index';

interface FilePickerProps {
  file: File | string;
  setFile: (file: string) => void;
  readFile: (type: string) => void;
}

const FilePicker = ({ file, setFile, readFile }: FilePickerProps) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
          id='file-upload'
          type='file'
          accept='image/'
          onChange={(e) => {
            if (e.target.files != null) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <label
          htmlFor='file-upload'
          className='filepicker-label'
        >
          Upload File
        </label>
        <p className='mt-2 text-gray-500 text-xs truncate'>
          {file === '' ? 'No file selected' : file.name}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton
          styleType='outline'
          title='Logo'
          handleClick={() => readFile('logo')}
          customStyles='text-xs p-1.5'
        />
        <CustomButton
          styleType='filled'
          title='Full'
          handleClick={() => readFile('full')}
          customStyles='text-xs'
        />
      </div>
    </div>
  );
};

export default FilePicker;

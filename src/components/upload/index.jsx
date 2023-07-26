import { PhotoIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { apiUpload } from 'src/utils/contants';

const UploadImage = ({ setValue, name }) => {
  const handleImages = async (e) => {
    const file = e.target.files;
    if (!file) return;
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('image', file[0]);

      const res = await axios.post(apiUpload, bodyFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const imageDb = res.data?.data;
      const imageObj = {
        medium: imageDb.medium.url,
        thumb: imageDb.thumb.url,
        clientUrl: imageDb.url,
      };
      setValue(name, imageObj);
      toast.success('Upload image successfully!!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <label className='w-full border border-gray-400 border-dashed rounded-lg h-[200px] cursor-pointer flex items-center justify-center'>
      <input
        type='file'
        name='feature_images'
        id='feature_images'
        hidden
        onChange={handleImages}
      />
      <PhotoIcon className='w-10 h-10 text-gray-500' />
    </label>
  );
};

UploadImage.propTypes = {
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default UploadImage;

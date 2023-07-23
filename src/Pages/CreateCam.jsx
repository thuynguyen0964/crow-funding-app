import Layout from 'src/Layout/Dashboard';
import { useForm } from 'react-hook-form';
import FormRow from 'src/components/common/FormRow';
import FormGroup from 'src/components/common/FormGroup';
import Label from 'src/components/label';
import Input from 'src/components/Input';
import { Dropdown } from 'src/components/Dropdown';
import Textarea from 'src/components/Input/Textarea';

import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import 'react-quill/dist/quill.snow.css';
import { useMemo } from 'react';

Quill.register('modules/imageUploader', ImageUploader);

const CreateCam = () => {
  const { control, handleSubmit } = useForm();
  const handleCreateCam = (values) => {
    console.log(values);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        upload: () => {},
      },
    }),
    []
  );

  return (
    <Layout>
      <section className='bg-white rounded-lg py-10 px-[66px]'>
        <div className='text-center'>
          <h1 className='inline-block py-4 mb-6 text-2xl font-bold rounded-lg px-14 bg-text4 bg-opacity-10'>
            Start a Campain 🚀
          </h1>

          <form onSubmit={handleSubmit(handleCreateCam)}>
            <FormRow>
              <FormGroup>
                <Label htmlFor='title'>Campain Title</Label>
                <Input
                  control={control}
                  name='title'
                  placeholder='Enter title...'
                  type='text'
                />
              </FormGroup>

              {/* select */}
              <FormGroup>
                <Label htmlFor='title'>Select Category</Label>
                <Dropdown>
                  <Dropdown.Select placeholder='Select your category'></Dropdown.Select>
                  <Dropdown.List>
                    <Dropdown.Option>Crypto</Dropdown.Option>
                    <Dropdown.Option>LoremInpusum</Dropdown.Option>
                    <Dropdown.Option>Computer/Laptop</Dropdown.Option>
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
            </FormRow>

            {/* short desc */}
            <FormGroup>
              <Label>Short Description</Label>
              <Textarea
                control={control}
                name='desc'
                placeholder='Some infomation about your campain...'
              />
            </FormGroup>

            <FormGroup>
              <Label>Contents</Label>
              <ReactQuill
                placeholder='Write your story......'
                modules={modules}
                theme='snow'
              />
            </FormGroup>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CreateCam;

import Layout from 'src/Layout/Dashboard';
import { useForm } from 'react-hook-form';
import FormRow from 'src/components/common/FormRow';
import FormGroup from 'src/components/common/FormGroup';
import Label from 'src/components/label';
import Input from 'src/components/Input';

const CreateCam = () => {
  const { control, handleSubmit } = useForm();
  const handleCreateCam = (values) => {
    console.log(values);
  };

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

              <FormGroup>
                <Label htmlFor='title'>Select Category</Label>
                <Input
                  control={control}
                  name='title'
                  placeholder='Enter title...'
                  type='text'
                />
              </FormGroup>
            </FormRow>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CreateCam;

import { useForm } from 'react-hook-form';
import FormRow from 'src/components/common/FormRow';
import FormGroup from 'src/components/common/FormGroup';
import Label from 'src/components/label';
import Input from 'src/components/Input';
import { Dropdown } from 'src/components/Dropdown';
import Textarea from 'src/components/Input/Textarea';
import Editor from 'src/components/Editor';
import { Fragment, useEffect, useState } from 'react';
import Button from 'src/components/Button';
import { titlePage } from 'src/utils/contants';

const CreateCam = () => {
  const [value, setValue] = useState('');
  const { control, handleSubmit } = useForm();
  const handleCreateCam = (values) => {
    console.log(values);
  };

  useEffect(() => {
    document.title = titlePage.ADDCAMPAIN;
  }, []);

  return (
    <Fragment>
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
                  <Dropdown.Select placeholder='Select your category' />
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

            {/* content */}
            <FormGroup>
              <Label>Contents</Label>
              <Editor value={value} setValue={setValue} />
            </FormGroup>

            <FormRow>
              {/* refiled */}
              <FormGroup>
                <Label htmlFor='refilled'>Amount Refilled *</Label>
                <Input
                  control={control}
                  name='refilled'
                  placeholder='0.00$...'
                  type='text'
                />
                <p className='text-left text-sm text-text3'>
                  It will help fill amount box by click, place each amount by
                  comma ex: 10,20,30...
                </p>
              </FormGroup>

              {/* videos */}
              <FormGroup>
                <Label htmlFor='video'>Videos *</Label>
                <Input
                  control={control}
                  name='video'
                  placeholder='Video...'
                  type='text'
                />
                <p className='text-left text-sm text-text3'>
                  Place Youtube Videos or your videos URL...
                </p>
              </FormGroup>

              {/* goal */}
              <FormGroup>
                <Label htmlFor='goal'>Goal *</Label>
                <Input
                  control={control}
                  name='goal'
                  placeholder='Enter goal you want...'
                  type='text'
                />
              </FormGroup>

              {/* raise amouts */}
              <FormGroup>
                <Label htmlFor='amount'>Raise amount *</Label>
                <Input
                  control={control}
                  name='amount'
                  placeholder='Eg : $157.00 ....'
                  type='text'
                />
              </FormGroup>

              {/*  Campain method*/}
              <FormGroup>
                <Label htmlFor='method'>Campain End Method</Label>
                <Dropdown>
                  <Dropdown.Select placeholder='Choose something....' />
                  <Dropdown.List></Dropdown.List>
                </Dropdown>
              </FormGroup>

              {/* country */}
              <FormGroup>
                <Label htmlFor='country'>Select Country</Label>
                <Dropdown>
                  <Dropdown.Select placeholder='Select your country' />
                  <Dropdown.List>
                    <Dropdown.Option>VietNam</Dropdown.Option>
                    <Dropdown.Option>China</Dropdown.Option>
                    <Dropdown.Option>Russian</Dropdown.Option>
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>

              {/* time begin */}
              <FormGroup>
                <Label htmlFor='startAt'>Start At *</Label>
                <Input
                  control={control}
                  name='startAt'
                  placeholder='Choose your time to begin ....'
                  type='text'
                />
              </FormGroup>

              {/* endAt */}
              <FormGroup>
                <Label htmlFor='endAt'>End At *</Label>
                <Input
                  control={control}
                  name='endAt'
                  placeholder='Choose your time to end ....'
                  type='text'
                />
              </FormGroup>
            </FormRow>

            <Button className='bg-primary text-white mx-auto mt-5'>
              Submit new Campain
            </Button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default CreateCam;

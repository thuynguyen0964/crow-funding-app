/* eslint-disable no-unused-vars */
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
import axios from 'axios';
import { useChange } from 'src/hooks/useChange';
import { toast } from 'react-toastify';
import { useDebounce } from 'src/hooks/useDebounced';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { api } from 'src/api';
import UploadImage from 'src/components/upload';
import RequiredAuth from './RequiredAuth';

const categoriesFake = ['Educations', 'Life', 'Extracurricular', 'Scouting'];

const CreateCam = () => {
  const [story, setStory] = useState('');
  const [contries, setContries] = useState([]);
  const [startTime, onChangeStartTime] = useState(new Date());
  const [endTime, onChangeEndTime] = useState(new Date());

  const handleReset = () => {
    onChangeEndTime('');
    onChangeStartTime('');
    setStory('');
  };

  const { control, handleSubmit, setValue, formState, reset, watch } =
    useForm();
  const { isSubmitting } = formState;

  const handleCreateCam = async (values) => {
    try {
      const body = { ...values, story, startTime, endTime };
      await api.post('campain', body);
      toast.success('Create campain successfully!!');
      reset({});
      handleReset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSetDropDown = (name) => {
    const result = watch(name);
    return result;
  };

  useEffect(() => {
    document.title = titlePage.ADDCAMPAIN;
  }, []);

  const handleGetCategory = (name, value) => {
    setValue(name, value);
  };

  const [filter, setFilter] = useChange();
  const deboucedVal = useDebounce(filter, 800);

  const getCountryFromApi = async () => {
    if (!deboucedVal) return null;
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${deboucedVal}`
      );
      const data = response?.data;
      setContries(data);
    } catch (error) {
      toast.info(`Call api ${error.message}`);
    }
  };

  useEffect(() => {
    getCountryFromApi();
  }, [deboucedVal]);

  return (
    <RequiredAuth>
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
                <Label htmlFor='category'>Select Category</Label>
                <Dropdown>
                  <Dropdown.Select
                    placeholder={
                      handleSetDropDown('category') || 'Select category'
                    }
                  />
                  <Dropdown.List>
                    {categoriesFake.map((category, index) => (
                      <Dropdown.Option
                        key={index}
                        onClick={() => handleGetCategory('category', category)}
                      >
                        {category}
                      </Dropdown.Option>
                    ))}
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>
            </FormRow>

            {/* short desc */}
            <FormGroup>
              <Label htmlFor='desc'>Short Description</Label>
              <Textarea
                control={control}
                name='desc'
                placeholder='Some infomation about your campain...'
              />
            </FormGroup>

            {/* content */}
            <FormGroup>
              <Label>Contents</Label>
              <Editor value={story} setValue={setStory} />
            </FormGroup>

            {/* Image upload */}
            <FormRow>
              <FormGroup>
                <Label htmlFor='images'>Feature Image</Label>
                <UploadImage setValue={setValue} name='feature_images' />
              </FormGroup>
            </FormRow>

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
                <p className='text-sm text-left text-text3'>
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
                <p className='text-sm text-left text-text3'>
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
                  <Dropdown.Select
                    placeholder={
                      handleSetDropDown('country') || 'Select your country'
                    }
                  />
                  <Dropdown.List>
                    <Dropdown.Search
                      placeholder='Search country...'
                      onChange={setFilter}
                    />
                    {contries &&
                      contries.length > 0 &&
                      contries.map((country) => (
                        <Dropdown.Option
                          key={country?.name?.common}
                          onClick={() =>
                            handleGetCategory('country', country?.name?.common)
                          }
                        >
                          {country?.name?.common}
                        </Dropdown.Option>
                      ))}
                  </Dropdown.List>
                </Dropdown>
              </FormGroup>

              {/* time begin */}
              <FormGroup>
                <Label htmlFor='startAt'>Start At *</Label>
                <DatePicker
                  format='dd-MM-yyyy'
                  onChange={onChangeStartTime}
                  value={startTime}
                />
              </FormGroup>

              {/* endAt */}
              <FormGroup>
                <Label htmlFor='endAt'>End At *</Label>
                <DatePicker
                  format='dd-MM-yyyy'
                  onChange={onChangeEndTime}
                  value={endTime}
                />
              </FormGroup>
            </FormRow>

            <Button
              isLoading={isSubmitting}
              className='mx-auto mt-5 text-white bg-primary'
            >
              Submit new Campain
            </Button>
          </form>
        </div>
      </section>
    </RequiredAuth>
  );
};

export default CreateCam;

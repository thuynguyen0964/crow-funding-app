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

const CreateCam = () => {
  const [valueOill, setValueQill] = useState('');
  const [contries, setContries] = useState([]);
  const [startTime, onChangeStartTime] = useState(new Date());
  const [endTime, onChangeEndTime] = useState(new Date());

  const { control, handleSubmit, setValue } = useForm();
  const handleCreateCam = (values) => {
    console.log(values);
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
                <Label htmlFor='category'>Select Category</Label>
                <Dropdown>
                  <Dropdown.Select placeholder='Select your category' />
                  <Dropdown.List>
                    <Dropdown.Option
                      onClick={() => handleGetCategory('category', 'crypto')}
                    >
                      Crypto
                    </Dropdown.Option>
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
              <Editor value={valueOill} setValue={setValueQill} />
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

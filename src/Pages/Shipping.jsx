import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from 'src/components/Checkbox';
import { Dropdown } from 'src/components/Dropdown';
import Input from 'src/components/Input';
import FormGroup from 'src/components/common/FormGroup';
import FormRow from 'src/components/common/FormRow';
import Label from 'src/components/label';
import Payment from 'src/modules/Payment/Payments';
import Summary from 'src/modules/Payment/Summary';

const ShippingPage = () => {
  const [accept, setAccept] = useState(false);
  const handleCheck = () => {
    setAccept(!accept);
  };
  const { control } = useForm();
  return (
    <div className='flex items-start w-full gap-x-[74px]'>
      <div className='flex-1'>
        <h2 className='font-bold text-[30px] leading-normal mb-10'>
          Shipping Address
        </h2>
        <FormRow>
          <FormGroup>
            <Label>First Name *</Label>
            <Input control={control} name='first_name' placeholder='John' />
          </FormGroup>
          <FormGroup>
            <Label>Last Name *</Label>
            <Input control={control} name='last_name' placeholder='Doe' />
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Country *</Label>
          <Dropdown>
            <Dropdown.Select placeholder='Select country'></Dropdown.Select>
            <Dropdown.List></Dropdown.List>
          </Dropdown>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Street Address *</Label>
            <Input control={control} name='address' placeholder='John' />
          </FormGroup>
          <FormGroup>
            <Label>City *</Label>
            <Input control={control} name='city' placeholder='Doe' />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Postal Code *</Label>
            <Input control={control} name='code' placeholder='123456' />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number *</Label>
            <Input control={control} name='phone' placeholder='+123 456 789' />
          </FormGroup>
        </FormRow>
        <div className='flex items-center gap-x-5 mb-11'>
          <Checkbox name='terms' checked={accept} onClick={handleCheck}>
            <Label htmlFor='terms'>
              Remember this address for next time use
            </Label>
          </Checkbox>
        </div>
        <h2 className='font-bold text-[30px] leading-normal mb-10'>Payment</h2>
        <Payment />
      </div>
      <div className='flex-1 max-w-[462px] ml-auto'>
        <Summary />
      </div>
    </div>
  );
};

export default ShippingPage;

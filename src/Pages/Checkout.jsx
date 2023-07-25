import Payment from 'src/modules/Payment/Payments';
import Summary from 'src/modules/Payment/Summary';

const CheckoutPage = () => {
  return (
    <div className='max-w-[891px] flex items-start'>
      <div>
        <h2 className='font-bold text-[30px] leading-normal mb-10'>Payment</h2>
        <Payment />
      </div>
      <div className='flex-1 max-w-[462px] ml-auto'>
        <Summary />
      </div>
    </div>
  );
};

export default CheckoutPage;

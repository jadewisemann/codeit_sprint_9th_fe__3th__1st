import Tag from '@/components/Tag';

const Home = () => (
  <div className='m-3 space-x-2'>
    <Tag>태그1</Tag>
    <Tag variant='sm'>태그2</Tag>
    <Tag variant='md' className='bg-blue-200'>
      태그3
    </Tag>
    <Tag variant='lg' className='border' isRemovable>
      태그4
    </Tag>
  </div>
);

export default Home;

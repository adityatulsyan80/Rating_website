// pages/index.tsx
import MyComponent from '../components/MyComponent';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 sm:mx-10 border rounded-3xl mt-20 justify-center sm:w-45">
      <h1 className="text-3xl font-bold mb-4 pl-4">Leave a review</h1>
      <MyComponent />
      
    </div>
  );
};

export default HomePage;

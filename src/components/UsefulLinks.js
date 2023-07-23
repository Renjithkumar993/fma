import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaShoppingBasket, FaCar, FaBriefcase } from 'react-icons/fa';


const UsefulLinks = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: 'Food Delivery',
      description: 'Discover online food delivery apps in the area.',
      stores: [
        {
          id: 1,
          name: 'Foodie Express',
          description: 'Delicious food delivered to your doorstep!',
          website: 'https://www.foodieexpress.com',
          location: '123 Main St, Fredericton, NB',
          contact: 'Phone: (123) 456-7890',
        },
        {
          id: 2,
          name: 'Tasty Eats',
          description: 'Explore a wide range of cuisines for delivery.',
          website: 'https://www.tastyeats.com',
          location: '456 Elm St, Fredericton, NB',
          contact: 'Phone: (987) 654-3210',
        },
        // Add more food delivery stores
      ],
      style: {
        backgroundColor: '#F9A825',
        color: '#ffffff',
      },
    },
    {
      id: 2,
      title: 'Indian Groceries',
      description: 'Find local Indian grocery stores in Fredericton.',
      stores: [
        {
          id: 1,
          name: 'Spice Bazaar',
          description: 'Your one-stop-shop for Indian groceries.',
          location: '789 Maple Ave, Fredericton, NB',
          contact: 'Phone: (111) 222-3333',
        },
        {
          id: 2,
          name: 'Taste of India Market',
          description: 'Authentic Indian spices and foods.',
          location: '987 Oak St, Fredericton, NB',
          contact: 'Phone: (444) 555-6666',
        },
        // Add more Indian grocery stores
      ],
      style: {
        backgroundColor: '#689F38',
        color: '#ffffff',
      },
    },
    {
      id: 3,
      title: 'Rent a Car',
      description: 'Information on renting a car for your transportation needs.',
      stores: [
        {
          id: 1,
          name: 'Wheels on Wheels',
          description: 'Affordable car rentals for newcomers.',
          location: '222 Elm St, Fredericton, NB',
          contact: 'Phone: (777) 888-9999',
        },
        {
          id: 2,
          name: 'DriveEasy Rentals',
          description: 'Wide selection of cars for rent.',
          location: '333 Oak St, Fredericton, NB',
          contact: 'Phone: (000) 111-2222',
        },
        // Add more car rental companies
      ],
      style: {
        backgroundColor: '#0277BD',
        color: '#ffffff',
      },
    },
    {
      id: 4,
      title: 'Jobs',
      description: 'Find job opportunities in Fredericton.',
      jobSites: [
        {
          id: 1,
          name: 'JobSite1',
          description: 'Job site description 1',
          website: 'https://www.jobsite1.com',
        },
        {
          id: 2,
          name: 'JobSite2',
          description: 'Job site description 2',
          website: 'https://www.jobsite2.com',
        },
        // Add more job sites
      ],
      style: {
        backgroundColor: '#F57C00',
        color: '#ffffff',
      },
    },
    // Add more categories as needed
  ];

  const categoryIcons = {
    1: <FaUtensils size={30} />,
    2: <FaShoppingBasket size={30} />,
    3: <FaCar size={30} />,
    4: <FaBriefcase size={30} />,
  };


  // Framer Motion animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Handle category click to show details
  const handleCategoryClick = (id) => {
    setSelectedCategory(id === selectedCategory ? null : id);
  };

  // Render the stores for the selected category
  const renderStores = () => {
    const category = categories.find((cat) => cat.id === selectedCategory);
    if (!category) return null;

    return category.stores.map((store) => (
      <div key={store.id} className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{store.name}</h5>
            <p className="card-text">{store.description}</p>
            <p>{store.location}</p>
            <p>{store.contact}</p>
            <a href={store.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    ));
  };

  // Render the job sites for the selected category
  const renderJobSites = () => {
    const category = categories.find((cat) => cat.id === selectedCategory);
    if (!category) return null;

    return category.jobSites.map((site) => (
      <div key={site.id} className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{site.name}</h5>
            <p className="card-text">{site.description}</p>
            <a href={site.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    ));
  };

  // Render the link cards with categories
  const renderCategories = () => {
    return categories.map((category) => (
      <motion.div
        key={category.id}
        whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 15px rgba(0,0,0,0.1)' }}
        whileTap={{ scale: 0.95 }}
        className="col-md-4 mb-4"
      >
        <div
          className={`card h-100 ${
            selectedCategory === category.id ? 'bg-info text-white' : ''
          }`}
          onClick={() => handleCategoryClick(category.id)}
          style={{ cursor: 'pointer', ...category.style }}
        >
          <div className="card-body d-flex align-items-center justify-content-center">
            <div className="icon pr-2">{categoryIcons[category.id]}</div>
            <div className="text">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    ));
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      className="container mt-5"
    >
      <h2 className="mb-4 text-center">Useful Links for Newcomers</h2>
      <div className="row justify-content-center">{renderCategories()}</div>
      <div className="row mt-4">
        {selectedCategory === 1 && renderStores()}
        {selectedCategory === 2 && renderStores()}
        {selectedCategory === 3 && renderStores()}
        {selectedCategory === 4 && renderJobSites()}
      </div>
    </motion.div>
  );
};
export default UsefulLinks;

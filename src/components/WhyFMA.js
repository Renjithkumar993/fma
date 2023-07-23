import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGraduationCap, faHandsHelping, faSuitcase, faMapMarkedAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhyFMA = () => {
  const whyFMAData = [
    {
      title: 'Support Our Community',
      description:
        'At FMA, we believe in supporting our community through various initiatives, events, and programs. We strive to create a strong and united community where everyone feels welcome and valued.',
      icon: faUsers,
    },
    {
      title: 'Malayalam Classes',
      description:
        'We offer Malayalam language classes to help individuals embrace their cultural heritage and connect with their roots. Our classes are designed for both children and adults, fostering a sense of identity and pride.',
      icon: faGraduationCap,
    },
    {
      title: 'Empowering Youth',
      description:
        'Empowering the youth is a key focus for us. We provide opportunities for young individuals to develop leadership skills, creativity, and confidence through various workshops and activities.',
      icon: faHandsHelping,
    },

    {
      title: 'Newcomers Support',
      description:
        'Moving to a new country can be overwhelming. We provide newcomers support to help individuals adapt, settle, and integrate into Canadian society.',
      icon: faMapMarkedAlt,
    },
    {
        title: 'Job Support',
        description:
          'Finding a job can be challenging. At FMA, we offer job support services to assist community members in their job search, career development, and resume building.',
        icon: faSuitcase,
      },
    {
      title: 'Job Search Help',
      description:
        'Looking for a job in a new country comes with its unique challenges. We offer job search assistance, interview preparation, and networking opportunities.',
      icon: faSearch,
    },
  ];

  const chunkedWhyFMAData = [];
  for (let i = 0; i < whyFMAData.length; i += 3) {
    chunkedWhyFMAData.push(whyFMAData.slice(i, i + 3));
  }

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % chunkedWhyFMAData.length);
    }, 5000); // Set interval to 3 seconds (3000ms)

    return () => clearInterval(interval);
  }, [chunkedWhyFMAData.length]);

  const whyFMAItemTemplate = (data) => (
    <div className="col-md-12">
      <div className="card h-100 shadow mb-3">
        <div className="card-body text-center">
          <FontAwesomeIcon icon={data.icon} size="3x" className="text-primary mb-3" />
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Why Choose FMA?</h2>
      <div className="carousel-wrapper ">
        <div className="row justify-content-center">
          {chunkedWhyFMAData.map((carouselItems, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === activeSlideIndex ? 'active' : 'd-none'}`}
            >
              <div className="row justify-content-center">
                {carouselItems.map((data, i) => (
                  <div key={i} className="col-md-4">
                    {whyFMAItemTemplate(data)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyFMA;

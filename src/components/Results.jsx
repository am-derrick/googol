import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

// Component for the results of the search
export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm !== '') {
      if(location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search': // case for when the user accesses the search pane
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.map(({ link, title }, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target='_blank' rel='noreferrer'>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images': // case for when the user accesses the images pane
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.map(({ image, link: { href, title }}, index) => (
            <a className='sm:p-3 p-5' href={href} key={index} target='_blank' rel='noreferrer'>
              <img src={image?.src} alt={title} loading='lazy' />
              <p className='sm:w-36 w-36 break-words text-sm mt-2'>
                {title}
              </p>
            </a>
          ))}
        </div>
      );
    case '/news': // case for when the user accesses the news pane
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className='md:w-2/5 w-full'>
              <a href={links?.[0].href} target='_blank' rel='noreferrer' className='hover:underline'>
                <p className='text-lg dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
              <div className='flex-gap-4'>
                <a href={source?.href} target='_blank' rel='noreferrer'>
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos': // case for when the user accesses the videos pane
      return (
        <div className='flex flex-wrap'>
          {results.map((video, index) => (
            <div key={index} className='p-2'>
              {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls widtg='355px' height='200px' />}
            </div>
          ))}
        </div>
      );
    default:
      return 'ERROR';
  }
}

import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import Slider from "react-slick";
import S1 from './fac/S1';
import S2 from './fac/S2';
import S3 from './fac/S3';
import S4 from './fac/S4';
import S5 from './fac/S5';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Facilities() {
    let [categories] = useState({
        "Rico Red": [
            {
                id: 1,
                url: 'fac/f1.png'
            },
        ],
        "Coco Rico": [
            {
                id: 1,
                url: 'fac/f2.png'
            },
        ],
        "Swimming Pool": [
            {
                id: 1,
                url: 'fac/f3.png'
            }
        ],
        "Bedrooms": [
            {
                id: 1,
                url: 'fac/f4.png'
            }
        ],
        "Venue": [
            {
                id: 1,
                url: 'fac/f5.png'
            }
        ],
    })

    return (
        <div>
            <div className=" container mx-auto px-4 mb-10">
                <h1 className='mb-3 text-[40px] md:text-[64px]'>OUR FACILITIES</h1>
                <p className='mb-3 text-[24px] md:text-[40px]'>What we provide:</p>
                {/* <Tab.Group className="tab">
                    <Tab.List className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200  ">
                        <Tab className="mr-2">

                        </Tab>
                        <Tab className="mr-2">
                            <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50  ">Dashboard</a>
                        </Tab>
                        <Tab className="mr-2">
                            <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50  ">Settings</a>
                        </Tab>
                        <Tab className="mr-2">
                            <a className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50  ">Contacts</a>
                        </Tab>
                        <Tab>
                            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                        </Tab>
                    </Tab.List>
                </Tab.Group> */}
                <div className="image1">
                <div className="tab">
                    <div className="">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl p-1">
                                {Object.keys(categories).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full py-2.5 text-[24px] font-medium leading-5 text-black',
                                                'ring-white ring-opacity-60 ring-offset-0 focus:outline-none focus:ring-0',
                                                selected
                                                    ? ' border-b-2 border-black '
                                                    : 'text-black hover:bg-white/[0.12] hover:text-black'
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {Object.values(categories).map((posts, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-white p-3',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <ul>
                                            {posts.map((post) => (
                                                <li
                                                    key={post.id}
                                                    className=""
                                                >
                                                    <img src={post.url} alt="" />
                                                </li>
                                            ))}
                                        </ul>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
                </div>
                <div className="image2">
                    <h1 className='text-[20px] font-bold'>Rico Red</h1>
                    <S1 className=""/>
                    <h1 className='text-[20px] font-bold'>Coco Rico</h1>
                    <S2 className=""/>
                    <h1 className='text-[20px] font-bold'>Swimming Pool</h1>
                    <S3 className=""/>
                    <h1 className='text-[20px] font-bold'>Bedrooms</h1>
                    <S4 className=""/>
                    <h1 className='text-[20px] font-bold'>Venue</h1>
                    <S5 className=""/>
                </div>
            </div>
        </div>
    )
}

export default Facilities
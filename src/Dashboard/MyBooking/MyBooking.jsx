import React from 'react';
import useMyBookings from '../../Hooks/useMyBookings';
import BookingRow from './BookingRow/BookingRow';

const MyBooking = () => {

    const [userBookings] = useMyBookings()
    console.log(userBookings)

    return (
        <div>
            <div className="p-10">
                <div className="flex items-center justify-around">
                    <h1 className="text-xl md:text-2xl">My Bookings </h1>
                  
                </div>

                {/* table container */}
                <div className="overflow-x-auto m-10 max-w-xs md:max-w-max lg:max-w-screen-xl">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                               
                                <th>Name</th>
                                <th>Email</th>
                                <th>
                                  Number
                                </th>
                                <th>date</th>
                                <th>guest Num</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userBookings?.map((item, index) => (
                                    <BookingRow
                                        key={item._id}
                                        item={item}
                                        index={index}
                                    >
                                    </BookingRow>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyBooking;
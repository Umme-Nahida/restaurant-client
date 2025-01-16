import React from 'react';
import useManageAllBooking from '../../Hooks/useManageAllBooking';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AllBookingRow from './AllBookingRow';

const ManageAllBooking = () => {

    const [refetch,allBookings] = useManageAllBooking()

    return (
        <div>
            <SectionTitle heading={'MANAGE ALL BOOKINGS'} subTitle={'---At a Glance!---'}/>

            <div className="overflow-x-auto m-10 max-w-xs md:max-w-max lg:max-w-screen-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Number </th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Booking Activity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBookings?.map((item, index) => (
              <AllBookingRow key={item._id} item={item} index={index} refetch={refetch}></AllBookingRow>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageAllBooking;
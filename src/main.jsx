import React from 'react';
import { createRoot } from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Route/router';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=''>
   <RouterProvider router={router} />
   </div>
</React.StrictMode>
)

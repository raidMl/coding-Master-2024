import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

// Assuming your auth slice is stored in the Redux store
// Moved inside the function body to use inside prepareHeaders
export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://progres.mesrs.dz/api/infos/bac",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['info'],
    

    endpoints:(builder)=>({

        //get one student
        getOneUserNote:builder.query({
            query:(userId)=>`/${userId}/notes`,

            providesTags:['info']
        }),

        //many
        getAllUserInfo:builder.query({
          query:(userId)=>`${userId}/notes`,
          providesTags:['info']
        }),

        //for create
        addOrder:builder.mutation({
            query:()=>({
                url:'/order',
                method:"POST",
               body:order 
            }),
            invalidatesTags:['info']
        }),

           // Update order
    updateOrder: builder.mutation({
        query: ({orderId,formData}) => ({
          url: `/order/${orderId}`,
          method: "PATCH",
          headers: {
            'Content-Type': 'multipart/form-data', // Ensure correct content type for FormData
          },
          body: formData,
        }),
        invalidatesTags: ['info']
      }),

        //for delete

        //for delete
        deleteOrder: builder.mutation({
            query: ({ orderId }) => ({
              url: `/order/${orderId}`,
              method: "DELETE",
              body: undefined, // Set body to undefined for DELETE request
            }),
            invalidatesTags: ['info']
          })
    })
})

export const {useGetOneUserNoteQuery,useGetAllUserInfoQuery,useAddOrderMutation,useUpdateOrderMutation,useDeleteOrderMutation}=ordersApi
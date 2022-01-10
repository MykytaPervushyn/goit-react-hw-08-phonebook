// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//     reducerPath: 'contactsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://61c092f733f24c00178234dd.mockapi.io/' }),
//     tagTypes: ['Contact'],
//     endpoints: builder => ({
//         fetchContacts: builder.query({
//             query: () => `/contacts`,
//             providesTags: ['Contact'],
//         }),
//         deleteContact: builder.mutation({
//             query: (contactId) => ({
//                 url: `/contacts/${contactId}`,
//                 method: 'DELETE',
//             }),
//             invalidatesTags: ['Contact'],
//         }),
//         createContact: builder.mutation({
//             query: contactContent => ({
//                 url: '/contacts',
//                 method: 'POST',
//                 body: {
//                     name: contactContent.name,
//                     number: contactContent.number,
//                 },
//             }),
//             invalidatesTags: ['Contact'],
//         })
//     })
// })
// console.log(contactsApi);

// export const {
//     useFetchContactsQuery,
//     useDeleteContactMutation,
//     useCreateContactMutation,
// } = contactsApi;
import { baseApi } from "../baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providesTags: ["facility"],
    }),
    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
      providesTags: ["facility"],
    }),
    createFacility: builder.mutation({
      query: (facilityData) => ({
        url: "/facility",
        method: "POST",
        body: facilityData,
      }),
      invalidatesTags: ["facility"],
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facility"],
    }),
    editFacility: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["facility"],
    })
  }),
});

export const {
  useGetAllFacilitiesQuery,
  useGetSingleFacilityQuery,
  useCreateFacilityMutation,
  useDeleteFacilityMutation,
  useEditFacilityMutation
} = facilityApi;

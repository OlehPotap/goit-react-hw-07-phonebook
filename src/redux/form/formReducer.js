
import { createReducer } from '@reduxjs/toolkit';
import { getContactsList, postContactsList, delContactsList } from './formOperations';

export const formReducer = createReducer([], {
  [getContactsList.fulfilled]: (state, {payload})=> {
   return [...state, ...payload]},
   [getContactsList.rejected]: (state, {payload})=> {
    return [...state]},
   

   [postContactsList.fulfilled]: (state, {payload}) => {
    return [...state, payload]},
    [postContactsList.rejected]: (state, {payload})=> {
      return [...state]},

   [delContactsList.fulfilled]: (state, {payload}) => {
    return [...state].filter((el)=>{return el.id !== payload})},
    [delContactsList.rejected]: (state, {payload})=> {
      return [...state]},
})

export const loading = createReducer(false, {
  [getContactsList.pending]: state => true,
  [getContactsList.fulfilled]: state => false,
  [getContactsList.rejected]: state => false,
  
  [postContactsList.pending]: state => true,
  [postContactsList.fulfilled]: state => false,
  [postContactsList.rejected]: state => false,

  [delContactsList.pending]: state => true,
  [delContactsList.fulfilled]: state => false,
  [delContactsList.rejected]: state => false,
  
  })

export default formReducer;


import { create } from 'zustand'

const useConversations = create((set) => ({
  selectedConversation: null,
  setSelectedConversation:  (selectedConversation) => set({selectedConversation}),

  massages: [],
  setMassages:  (massages) => set({massages}),



  
}))
export default useConversations
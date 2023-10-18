import { defineStore } from "pinia";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/helpers";

const USER_STORE_ID = 'myUserStore'
const USER_LOCAL_STORAGE_KEY = 'user'
const USER_POSITION_LOCAL_STORAGE_KEY = 'userPosition'
const USER_POSITION_ALERT_DISMISSED_LOCAL_STORAGE_KEY = 'positionAlertDismissed'

export const useUserStore = defineStore({
  id: USER_STORE_ID,

  state: () => ({
    user: getLocalStorageItem(USER_LOCAL_STORAGE_KEY, null),
    position: getLocalStorageItem(USER_POSITION_LOCAL_STORAGE_KEY, undefined),
    position_alert_dismissed: getLocalStorageItem(USER_POSITION_ALERT_DISMISSED_LOCAL_STORAGE_KEY, false),
  }),

  actions: {
    setUser(user: any) {
      this.user = user;
      setLocalStorageItem(USER_LOCAL_STORAGE_KEY, this.user, true)
    },

    setPosition(position: any) {
      this.position = position;
      setLocalStorageItem(USER_POSITION_LOCAL_STORAGE_KEY, this.position, false)
    },

    setAlertDismissed(dismissed: boolean) {
      this.position_alert_dismissed = dismissed;
      setLocalStorageItem(USER_POSITION_ALERT_DISMISSED_LOCAL_STORAGE_KEY, this.position_alert_dismissed, true)
    },
    
    clearUser() {
      this.user = null;
      setLocalStorageItem(USER_LOCAL_STORAGE_KEY, this.user, true)
    },

  },
})
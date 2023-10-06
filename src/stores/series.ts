import { defineStore } from 'pinia'
import type { Serie } from '@/types/Serie';

export const useSeriesStore = defineStore('save', {
  state: () => ({
    series: [] as Array<Serie>,
  }),
  getters:{
    getSeries: (state) => {
      return state.series;
    }
  },
  actions: {
    addSerie(serie: Serie) {
      const find = this.series.find((s) => s.id === serie.id);
      if(this.series.length < 10 && !find)  {
        this.series.push(serie);
        return true;
      } else if (find) {
        this.series = this.series.filter((s) => s.id != serie.id);
      }
      return find ? true : false;
    },
  }
})

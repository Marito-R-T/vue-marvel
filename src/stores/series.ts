import { defineStore } from 'pinia'
import type { HistorySerie, Serie } from '@/types/Serie';

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
        useHistoryStore().removeSerie(serie);
        return true;
      } else if (find) {
        this.series = this.series.filter((s) => s.id != serie.id);
        return true
      }
      return false;
    },
  }
})

export const useHistoryStore = defineStore('history', {
  state: () => ({
    series: [] as Array<HistorySerie>,
  }),
  getters:{
    getSeries: (state) => {
      return state.series;
    }
  },
  actions: {
    addSerie(serie: HistorySerie) {
      const find = this.series.find((s) => s.id === serie.id);
      const saved = useSeriesStore().getSeries.find((s) => s.id === serie.id);
      if(!find && !saved)  {
        this.series.push(serie);
        return true;
      } else if (find && !saved) {
        this.series = this.series.filter((s) => s.id != serie.id);
        this.series.push(find);
        return true;
      }
      return false;
    },
    removeSerie(serie: HistorySerie) {
      const find = this.series.find((s) => s.id === serie.id);
      if(find) {
        this.series = this.series.filter((s) => s.id != serie.id);
        console.log(this.series);
        return true;
      }
      return false;
    }
  }
})

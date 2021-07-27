const BASE_URL = '//localhost:9090/v1';
export default {
  async getImagesFromApi({ commit }) {
    const images = await this.$axios.$get(`${BASE_URL}/images/`);
    commit({ type: 'setImages', images });
  },
};

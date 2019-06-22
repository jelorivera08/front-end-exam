import axios from 'axios';

class API {
  constructor(url) {
    this.url = url;
    this.endpoints = {};
  }

  createEntity(entity) {
    this.endpoints[entity] = this.createCounterEndpoints(entity);
  }

  createCounterEndpoints() {
    const resourceURL = this.url;
    let endpoints = {
      getAll: () => axios.get(`${resourceURL}/counters`),
      putOne: (title) =>
        axios.post(
          `${resourceURL}/counters`,
          {
            title,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ),
      increment: (id) =>
        axios.post(
          `${resourceURL}/counters/inc`,
          {
            id,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ),
      decrement: (id) =>
        axios.post(
          `${resourceURL}/counters/inc`,
          {
            id,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ),
      delete: (id) =>
        axios.delete(
          `${resourceURL}/counters/inc`,
          {
            id,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ),
    };

    return endpoints;
  }
}

export default API;

'use strict';

/**
 * musician.js controller
 *
 * @description: A set of functions called "actions" of the `musician` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },
  async createMusician(ctx) {
    const { request: { body }, params:{user_id} } = ctx;
    
  
    try {
      const response = await strapi.query('musician', 'musician').create(body);
      strapi.query('user', 'users-permissions').update({id: user_id }, { isProfileCreated: 1 });
      ctx.send(response);
    } catch (err) {
      console.log(err)
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  },
  async getMusician(ctx) {
    const { params: { user_id } } = ctx;
  
    try {
      console.log(user_id)
      const profileData = await strapi.query('musician', 'musician').findOne({musicianId: user_id});

      ctx.send({ profileData });
    } catch (err) {
      console.log(err)
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  },
  async updateMusician(ctx) {
    const { request: { body }, params: { user_id } } = ctx;
    console.log(body)
    try {
      const response = await strapi.query('musician', 'musician').update({ musicianId: user_id }, body);
        ctx.send(response);
    
      }
     catch (err) {
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  },
  async findMusician(ctx) {
    const { params: { genre, experience, playedInGroup , instrument } } = ctx;
  
    try {

      const musicianData = await strapi.query('musician', 'musician').find({ genre: genre, experience_gte: experience, playedInGroup: playedInGroup, instrument:instrument});

      ctx.send({ musicianData });
    } catch (err) {
      console.log(err)
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  }
};

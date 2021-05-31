'use strict';

/**
 * group.js controller
 *
 * @description: A set of functions called "actions" of the `group` plugin.
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
  async createGroup(ctx) {
    const { request: { body } } = ctx;
    
    try {
      const response = await strapi.query('group', 'group').create(body);
      ctx.send(response);
    } catch (err) {
      console.log(err)
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  },
  async getGroup(ctx) {
    const { params: { group_id } } = ctx;
  
    try {
      console.log(group_id)
      const groupData = await strapi.query('group', 'group').findOne({id: group_id});
      console.log(group_id)

      ctx.send({ groupData });
    } catch (err) {
      console.log(err)
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  },
  async createGroupInstrument(ctx) {
    const { request: { body } } = ctx;
    
    try {
      const response = await strapi.query('groupInstruments', 'group').create(body);
      ctx.send(response);
    } catch (err) {
      console.log(err)
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  },
  async getGroupInstrument(ctx) {
    const { params: { group_id } } = ctx;
  
    try {

      const groupData = await strapi.query('groupInstruments', 'group').find({groupId: group_id});

      ctx.send({ groupData });
    } catch (err) {
      console.log(err)
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
    }
  },
  async updateGroup(ctx) {
    const { request: { body }, params: { group_id } } = ctx;
    console.log(body)
    try {
      const response = await strapi.query('group', 'group').update({ id: group_id }, body);
        ctx.send(response);
    
      }
     catch (err) {
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
      console.log(err);
    }
  },
  async findGroup(ctx) {
    const { params: { genre, experience, playedInGroup,instrument } } = ctx;
    try {
      const groupInstruments = await strapi.query('groupInstruments', 'group').find({ instrument})
   
      const groups = groupInstruments.reduce(async (acc, groupInstrument) => {
        const {groupId}  = groupInstrument;
       
        const accum = await acc;
        const foundGroup = await strapi.query('group', 'group').findOne({ id: groupId, genre: genre, experience_lte: experience, playedInGroup: playedInGroup });
        if (foundGroup){
          accum.push(foundGroup)
        }
        return accum;
      },[]);
  
        ctx.send(await groups);
    
      }
     catch (err) {
      ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
      console.log(err);
     }
    },
    async createGroupInvite(ctx) {
      const { request: { body } } = ctx;
      
      try {
        const response = await strapi.query('groupInvites', 'group').create(body);
        ctx.send(response);
      } catch (err) {
        console.log(err)
        ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
      }
    },
    async getGroupInvite(ctx) {
      const { params: { group_id } } = ctx;
    
      try {
  
        const groupData = await strapi.query('groupInvites', 'group').find({groupId: group_id});
  
        ctx.send({ groupData });
      } catch (err) {
        console.log(err)
        ctx.badRequest(null, [{ messages: [{ id: 'Not found' }] }]);
      }
    },
};

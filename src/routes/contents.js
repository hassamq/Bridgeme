const express = require('express');

const router = express();

const { ContentsController } = require('../controllers/contents');
const { isAuth } = require('../middleware/access');

const RouterContents = {
  init: async (req, res, next) => {
    const result = await ContentsController.init();
    res.status(200).send(result);
  },

  cover: async (req, res, next) => {
    const { id } = req.params;
    const result = await ContentsController.cover(id, req.body);
    res.redirect('/admin/contents/index');
  },

  whyBridge: async (req, res, next) => {
    const { id } = req.params;
    const result = await ContentsController.whyBridge(id, req.body);
    res.redirect('/admin/contents/index');
  },

  features: async (req, res, next) => {
    const { id } = req.params;
    const result = await ContentsController.features(id, req.body);
    res.redirect('/admin/contents/index');
  },

  howork: async (req, res, next) => {
    const { id } = req.params;
    const result = await ContentsController.howItWork(id, req.body);
    res.redirect('/admin/contents/index');
  },

  testimonials: async (req, res, next) => {
    const { id } = req.params;
    const result = await ContentsController.testimonials(id, req.body);
    res.redirect('/admin/contents/index');
  },

  contact: async (req, res, next) => {
    const { id } = req.params;
    const result = await ContentsController.contact(id, req.body);
    res.redirect('/admin/contents/index');
  },

  socials: async (req, res, next) => {
    const { id } = req.params;
    const result = await ContentsController.socials(id, req.body);
    res.redirect('/admin/contents/index');
  }
};

router.get('/init', isAuth, RouterContents.init);
router.post('/cover/:id', isAuth, RouterContents.cover);
router.post('/why-bridge/:id', isAuth, RouterContents.whyBridge);
router.post('/features/:id', isAuth, RouterContents.features);
router.post('/howork/:id', isAuth, RouterContents.howork);
router.post('/testimonials/:id', isAuth, RouterContents.testimonials);
router.post('/contact/:id', isAuth, RouterContents.contact);
router.post('/socials/:id', isAuth, RouterContents.socials);

module.exports = router;
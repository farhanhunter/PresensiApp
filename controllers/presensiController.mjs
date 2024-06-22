import presensiModel from "../models/presensiModel.mjs";

class PresensiController {
  getPresensi(req, res) {
    const presensiList = presensiModel.getAllPresensi();
    res.render("presensiView", { presensi: presensiList });
  }

  postPresensi(req, res, callback) {
    const newPresensi = {
      nama: req.body.nama,
      checkin: req.body.checkin,
      checkout: req.body.checkout,
      socialMedia: req.body.socialMedia,
    };
    presensiModel.upsertPresensi(newPresensi);
    callback(newPresensi); // Call callback after adding new presensi
  }
}

export default new PresensiController();
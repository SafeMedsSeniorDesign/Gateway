const prescriptionReasonRequests = require('../../lib/PharmacyService/PrescriptionReason');
const {boomify} = require('boom');

exports.createPrescriptionReasons = async (req, reply) => {
  try {
    const prescriptionReason = await prescriptionReasonRequests.createPrescriptionReason(req.body.prescriptionReason);
    return {prescriptionReason}
  } catch (err) {
    throw boomify(err);
  }
}

exports.patchPrescriptionReason = async (req, reply) => {
  try {
     const prescriptionReason = await prescriptionReasonRequests.patchPrescriptionReason(req.params.id, req.body.prescriptionReason);
     return {prescriptionReason};
  } catch (err) {
    throw boomify(err);
  }
}

exports.deletePrescriptionReason = async (req, reply) => {
  try {
    await prescriptionReasonRequests.deletePrescriptionReason(req.params.id);

    return {};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescriptionReasonsWithFilter = async (req, reply) => {
  try {

  } catch (err) {
    throw boomify(err);
  }
};
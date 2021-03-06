const activeEnum = require("../../lib/constants/activeEnum");

const prescriptionPrescribableDrugBeforeSave = {
  prescriptionId: {
    type: "number",
    description: "The id of the prescription the drug is being added to",
  },
  prescribableId: {
    type: "number",
    description: "The id of the prescribable to add to this prescription",
  },
  active: {
    type: "string",
    enum: activeEnum,
    description: "Whether or not this prescribable is active",
  },
  prescriptionStartDate: {
    type: "string",
    description: "When the prescription starts",
  },
  prescriptionEndDate: {
    type: "string",
    description: "When the prescription ends",
  },
};

const prescriptionPrescribableDrugAfterSave = {
  ...prescriptionPrescribableDrugBeforeSave,
  prescriptionPrescribableDrugId: {
    type: "number",
    description: "The id of the row",
  },
  updatedAt: {
    type: "string",
    description: "When the row was last updated",
  },
  createdAt: {
    type: "string",
    description: "When the row was created",
  },
};

exports.createPrescriptionPrescribableDrug = {
  description: "Creates a prescription prescribable drug with the given body",
  tags: ["PrescriptionPrescribableDrug"],
  summary:
    "Creates a prescription prescribable drug and applies the given body",
  params: {
    type: "object",
    properties: {
      patientId: {
        type: "string",
      },
    },
  },
  body: {
    type: "object",
    description: "The prescription prescribable drug to create",
    properties: {
      prescriptionPrescribableDrug: {
        type: "object",
        properties: prescriptionPrescribableDrugBeforeSave,
      },
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: "The prescription prescribable drug to create",
      type: "object",
      properties: {
        prescriptionPrescribableDrug: {
          type: "object",
          properties: prescriptionPrescribableDrugAfterSave,
          description: "The prescription prescribable drug that was saved",
        },
      },
    },
  },
};

exports.deletePrescriptionPrescribableDrug = {
  description: "Deletes a prescription prescribable drug with the given id",
  tags: ["PrescriptionPrescribableDrug"],
  summary: "Deletes the prescription prescribable drug with the given id",
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "number",
        description: "The ID of the prescription prescribable drug to delete",
      },
    },
  },
  exposeRoute: true,
  response: {
    204: {
      description: "Succesfully deleted the prescription prescribable drug",
      type: "object",
      properties: {
        msg: {
          type: "string",
          default: "Succesfully deleted the prescription prescribable drug",
        },
      },
    },
    404: {
      description: "The prescription prescribable drug was not found",
      type: "object",
      properties: {
        msg: {
          type: "string",
          default: "The prescription prescribable drug was not found",
        },
      },
    },
  },
};

exports.getPrescriptionPrescribableDrugCountForLastYear = {
  description: "Gets all of the prescribables by count for the last year",
  tags: ["PrescriptionPrescribableDrug"],
  summary: "Gets all of the prescribables by count for the last year",
  exposeRoute: true,
  params: {
    type: "object",
    required: ["patientId"],
    properties: {
      patientId: {
        type: "number",
        description: "The ID of the prescription to delete",
      },
    },
  },
  response: {
    200: {
      description:
        "Successfully got the count of prescribables for the last year",
      type: "object",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              prescribableName: {
                type: "string",
                description: "The name of the prescribable",
              },
              prescriptionCount: {
                type: "number",
                description: "The number of the prescribables",
              },
            },
          },
        },
      },
    },
  },
};

exports.getCountOfPrescribablesPerDoctor = {
  description: "Gets a count of prescribables for doctor for patient",
  tags: ["PrescriptionPrescribableDrug"],
  summary: "Gets a count of prescribables for doctor for patient",
  params: {
    type: "object",
    properties: {
      patientId: {
        type: "string",
      },
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: "The count of prescribable per doctor",
      type: "object",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              doctorName: {
                type: "string",
                description: "The name of the doctor",
              },
              numPrescriptions: {
                type: "number",
                description: "The number of prescriptions",
              },
            },
          },
        },
      },
    },
  },
};

exports.patchPrescriptionPrescribableDrug = {
  description: "Patches a prescription prescribable drug with the given ID",
  tags: ["PrescriptionPrescribableDrug"],
  summary: "Patches a prescription prescribable drug  with the given  ID",
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "number",
        description: "The ID of the prescription prescribable drug  to patch",
      },
    },
  },
  body: {
    type: "object",
    properties: {
      prescribable: {
        type: "object",
        properties: prescriptionPrescribableDrugBeforeSave,
      },
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: "Succesfully patched the prescription prescribable drug ",
      type: "object",
      properties: {
        prescriptionPrescribableDrug: {
          type: "string",
          properties: prescriptionPrescribableDrugAfterSave,
          description: "The prescription prescribable drug that was patched",
        },
      },
    },
    404: {
      description:
        "The prescription prescription prescribable drug drug was not found",
      type: "object",
      properties: {
        msg: {
          type: "string",
          default: "The prescription prescribable drug was not found",
        },
      },
    },
  },
};

exports.getPrescriptionPrescribableDrugWithFilter = {
  description:
    "Gets all prescription prescribable drugs that match the given filter",
  tags: ["PrescriptionPrescribableDrug"],
  summary:
    "Grabs all prescription prescribable drugs that match the given filter",
  query: {
    type: "object",
    properties: prescriptionPrescribableDrugAfterSave,
  },
  exposeRoute: true,
  response: {
    200: {
      type: "object",
      description:
        "Succesfully got a list of all prescription prescribable drugs",
      properties: {
        prescribables: {
          type: "array",
          items: {
            type: "object",
            properties: prescriptionPrescribableDrugAfterSave,
          },
        },
      },
    },
  },
};

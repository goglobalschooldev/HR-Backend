import mongoose from "mongoose";
import Employee from "../../models/Employee"
import { currentDate } from "../../fn/currentDate";
import { Affair, Office, Position, Section, WrokingTime } from "../../models/Branch";
import EmployeeWarning from "../../models/EmployeeWarning";
import EmployeePublicHoliday from "../../models/EmployeePublicHoliday";
import { ContactType } from "../../models/Contract";
import { Evaluation } from "../../models/Evaluation";
import Shift from "../../models/Shift";
const generate = {
    Query: {
        generateData: async (_root: undefined) => {
            try {
                // branchs da new ✅
                // employees(id cared) ✅
                // employees.map(async (emp: any) => {
                //     await new Employee({
                //         _id: emp?._id?.$oid,
                //         nationalId: emp?.national_id,
                //         employeeId: emp?.employee_id,
                //         firstName: emp?.khmer_name?.first_name,
                //         lastName: emp?.khmer_name?.last_name,
                //         latinName: emp?.latin_name?.first_name + " " + emp?.latin_name?.last_name,
                //         gender: emp?.gender,
                //         profileImage: emp?.image?.src,
                //         joinDate: emp?.join_date?.$date,
                //         dob: emp?.date_of_birth?.$date,
                //         placeOfBirth: emp?.place_of_birth,
                //         nationality: emp?.nationality,
                //         tell: emp?.phone,
                //         email: emp?.email,
                //         currentAddress: emp?.current_address,
                //         // idCard: Schema.Types.ObjectId,
                //         branch: new mongoose.Types.ObjectId("657d6d2d5dad38a23ed2f04e"),
                //         workingStatus: emp?.working_status,
                //         marital: emp?.marital,
                //         workBook: emp?.work_book,
                //         role: emp?.adminRole
                //     }).save()
                // })
                // id card  ✅

                // idcard.map(async (idcard: any) => {
                //     await Employee.findByIdAndUpdate(idcard?.emp_obj_id?.$oid, { idCard: idcard?._id?.$oid })
                // })
                // employeeWarnings  ✅
                // employeewarnings.map(async (waning: any) => {
                //     await new EmployeeWarning({
                //         employeeId: waning?.employee?.$oid,
                //         date: waning?.date?.$date,
                //         description: waning?.description,
                //         resolution: waning?.resolution,
                //         result: waning?.result,
                //         remark: waning?.remark,
                //     }).save()
                // })

                // employeePublicHolidays   ✅
                // employees.map(async (emp: any) => {
                //     if (emp?.type === "teaching") {
                //         await new EmployeePublicHoliday({
                //             employeeId: emp?._id?.$oid,
                //             title: new mongoose.Types.ObjectId("657d742389c7458cc2f5f4de"),
                //             totalDay: 18,
                //             year: "2023",
                //             status: true
                //         }).save()
                //     }
                // })

                //workingTimes ✅
                // wrokingtimes.map(async (time: any) => {
                //     await new WrokingTime({
                //         employeeId: time?.emp_id?.$oid,
                //         shiftName: time?.shift_name,
                //         start: time?.start,
                //         end: time?.end,
                //     }).save()
                // })

                // affairs ✅
                // affair.map(async (aff: any) => {
                //     await new Affair({
                //         _id: aff?._id?.$oid,
                //         affairName: aff?.affair_name,
                //     }).save()
                // })
                // offices  ✅

                // offices.map(async (aff: any) => {
                //     await new Office({
                //         _id: aff?._id?.$oid,
                //         officeName: aff?.office_name,
                //     }).save()
                // })
                // sections✅
                // sections.map(async (aff: any) => {
                //     await new Section({
                //         _id: aff?._id?.$oid,
                //         sectionName: aff?.section_name,
                //     }).save()
                // })

                // positions✅
                // positions.map(async (aff: any) => {
                //     await new Position({
                //         _id: aff?._id?.$oid,
                //         position: aff?.name,
                //     }).save()
                // })

                // contractTypes✅ 
                // contractTypes.map(async (aff: any) => {
                //     await new ContactType({
                //         _id: aff?._id?.$oid,
                //         title: aff?.title,
                //     }).save()
                // })

                // attendances
                // shifts
                // shifts.map(async (aff: any) => {
                //         await new Shift({
                //             from: aff?.from?.$date,
                //             to: aff?.from?.$to,
                //             shiftOff: aff?.shiftOfff,
                //             reason: aff?.reason,
                //             timeOff: new mongoose.Types.ObjectId("657d742389c7458cc2f5f4de"),
                //             requestBy: aff?.request_by?.$oid,
                //             approveBy: new mongoose.Types.ObjectId("634f9edb28216566b493618d") ,
                //             approveStatus: aff,
                //             hrComment: aff?.hrComment,
                //             // requestAt: aff,
                //         }).save()
                //     })
                    // evaluates ✅ 
                    // evaluations.map(async (aff: any) => {
                    //     await new Evaluation({
                    //         _id: aff?._id?.$oid,
                    //         title: aff?.title,
                    //         evaluations: aff?.evaluations
                    //     }).save()
                    // })
                } catch (error) {
                    return error
                }
            }

    }
    }

const data = [{
        "_id": {
            "$oid": "634f9edb28216566b493618d"
        },
        "national_id": "200123355(01)",
        "khmer_name": {
            "first_name": "វេត",
            "last_name": "ស្រីម៉ៅ"
        },
        "latin_name": {
            "first_name": "Vet",
            "last_name": "Sreymao"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/8eb0d282-5609-4327-879e-7e8bf1a7d8b91052023jpeg.png",
            "name": "8eb0d282-5609-4327-879e-7e8bf1a7d8b91052023jpeg.png"
        },
        "date_of_birth": "1991-09-06T06:48:05.000Z",
        "place_of_birth": "Battambong",
        "nationality": "Cambodian",
        "phone": "012 634 399",
        "email": "sreymao.vet@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T06:53:15.752Z"
        },
        "__v": 0,
        "employee_id": "00019",
        "join_date": {
            "$date": "2015-11-02T06:53:27.000Z"
        },
        "work_book": true,
        "contract": {
            "$oid": "63e9e3ba2b4b8821e89e85a0"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d798b"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "adminRole": "admin"
    },
    {
        "_id": {
            "$oid": "634f9fee28216566b49361f2"
        },
        "national_id": "190707188",
        "khmer_name": {
            "first_name": "ធៀង",
            "last_name": "រតនា"
        },
        "latin_name": {
            "first_name": "Theang",
            "last_name": "Rathana"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/2c8f04de-465e-4068-a179-ecf0c191c8251052023jpeg.png",
            "name": "2c8f04de-465e-4068-a179-ecf0c191c8251052023jpeg.png"
        },
        "date_of_birth": "1995-08-17T06:54:22.000Z",
        "place_of_birth": "Pnom Strok, Banteay Meanchey",
        "nationality": "Cambodian",
        "phone": "086 77 00 17",
        "email": "theangrathana1@gmail.com",
        "current_address": "Siem Reap",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "2017-2019",
                "title": "Graphic Designer",
                "company": "Norea Angkor Handicrafts",
                "key": {
                    "$date": "2022-10-19T06:58:58.201Z"
                }
            },
            {
                "start_end_date": "2019-2020",
                "title": "Graphic Designer",
                "company": "Courtyard By Marriott Siem Reap",
                "key": {
                    "$date": "2022-10-19T07:00:13.371Z"
                }
            },
            {
                "start_end_date": "2020-2021",
                "title": "Graphic Designer",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-19T07:00:47.996Z"
                }
            },
            {
                "start_end_date": "2021-Present",
                "title": "Head of IT Reserch &Development",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-19T07:01:20.844Z"
                }
            }
        ],
        "edu_background": [
            {
                "start_end_date": "2017-2020",
                "title": "Bachelor of Information Technology",
                "school": "University of South-East Asia",
                "key": {
                    "$date": "2022-10-19T07:02:23.964Z"
                }
            }
        ],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T06:57:50.670Z"
        },
        "__v": 0,
        "employee_id": "00319",
        "join_date": {
            "$date": "2020-09-07T06:58:04.000Z"
        },
        "work_book": true,
        "contract": {
            "$oid": "63e768818a2abb8c17ff7401"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "adminRole": "superAdmin",
        "ph": [
            {
                "title": "Al",
                "totalDay": 18,
                "year": "2023",
                "status": true
            },
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d798c"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": false
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fa35428216566b493630b"
        },
        "national_id": "180867830",
        "khmer_name": {
            "first_name": "ហេង",
            "last_name": "ចាន់ភក្ដី"
        },
        "latin_name": {
            "first_name": "Heng",
            "last_name": "Chanpheakdey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/a3964704-4bbf-4a5c-b77d-b273c6bbcaf51032022jpeg.png",
            "name": "a3964704-4bbf-4a5c-b77d-b273c6bbcaf51032022jpeg.png"
        },
        "date_of_birth": "2000-07-25T07:09:12.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "092 910 156",
        "email": "hengchanpheakdey8@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T07:12:20.939Z"
        },
        "__v": 0,
        "employee_id": "00408",
        "join_date": {
            "$date": "2021-11-01T07:12:25.000Z"
        },
        "work_book": false,
        "working_status": "resign",
        "adminRole": "block"
    },
    {
        "_id": {
            "$oid": "634fa53628216566b49363b0"
        },
        "national_id": "180762445",
        "khmer_name": {
            "first_name": "ដុង",
            "last_name": "វាសនា"
        },
        "latin_name": {
            "first_name": "Dong",
            "last_name": "Veasna"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f083cb19-5196-4b5b-999b-754efd3bdbfb1052023jpeg.png",
            "name": "f083cb19-5196-4b5b-999b-754efd3bdbfb1052023jpeg.png"
        },
        "date_of_birth": "2000-11-08T07:12:59.000Z",
        "place_of_birth": "Pouk, Siem Reap",
        "nationality": "Cambodian",
        "phone": "092 910 156",
        "email": "dongveasna12c@gmail.com",
        "current_address": "Pouk, Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T07:20:23.027Z"
        },
        "__v": 0,
        "employee_id": "00451",
        "join_date": {
            "$date": "2022-10-19T07:20:25.491Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae2d12b4b8821e89efb38"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d798d"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fa73b28216566b4936437"
        },
        "national_id": "110643538",
        "khmer_name": {
            "first_name": "ទឺម",
            "last_name": "សក្តា"
        },
        "latin_name": {
            "first_name": "Tem",
            "last_name": "Sakada"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/dce2d7a9-c667-4ca5-97ba-abd20adea4f61042023jpeg.png",
            "name": "dce2d7a9-c667-4ca5-97ba-abd20adea4f61042023jpeg.png"
        },
        "date_of_birth": "2022-10-19T07:23:26.611Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "077 420 668",
        "email": "temsakada001@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T07:28:59.464Z"
        },
        "__v": 0,
        "employee_id": "00472",
        "join_date": {
            "$date": "2022-10-19T07:30:19.892Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e60f478a2abb8c17ff1d54"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d798e"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "adminRole": "headOffice"
    },
    {
        "_id": {
            "$oid": "634fa7f528216566b49364aa"
        },
        "national_id": "161914341",
        "khmer_name": {
            "first_name": "គឹមហួ",
            "last_name": "វឌ្ឍនា"
        },
        "latin_name": {
            "first_name": "Kimhuo",
            "last_name": "Vothana"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ffb08d5f-c5f8-4440-ae57-5e7b68d037521032022jpeg.png",
            "name": "ffb08d5f-c5f8-4440-ae57-5e7b68d037521032022jpeg.png"
        },
        "date_of_birth": "2000-01-24T07:30:42.000Z",
        "place_of_birth": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097​​ 734 3745",
        "email": "kimhuovothna@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T07:32:05.204Z"
        },
        "__v": 0,
        "employee_id": "00459",
        "join_date": {
            "$date": "2022-06-01T07:32:11.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e60fb68a2abb8c17ff1d89"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "634fa89d28216566b49364f3"
        },
        "national_id": "180877332",
        "khmer_name": {
            "first_name": "លួន",
            "last_name": "សុភា"
        },
        "latin_name": {
            "first_name": "Luon",
            "last_name": "Sophea"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9f7efb01-c16b-411e-9d7e-e8769c4614991052023jpeg.png",
            "name": "9f7efb01-c16b-411e-9d7e-e8769c4614991052023jpeg.png"
        },
        "date_of_birth": "1999-08-27T07:32:25.000Z",
        "place_of_birth": "វត្តស្វាយ, សាលាកំរើក, សៀមរាប, សៀមរាប\n",
        "nationality": "Cambodian",
        "phone": "096​ 9604 394",
        "email": "sokphealoun9@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T07:34:53.850Z"
        },
        "__v": 0,
        "employee_id": "00458",
        "join_date": {
            "$date": "2022-06-01T07:35:05.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9dea32b4b8821e89e7cb3"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d798f"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fadc228216566b49366ae"
        },
        "national_id": "150727188",
        "khmer_name": {
            "first_name": "មៀច",
            "last_name": "ភារម្យ"
        },
        "latin_name": {
            "first_name": "Meach",
            "last_name": "Phearom\t"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0cd91683-f2a5-487c-87fb-4bfb10bdc4721032022jpeg.png",
            "name": "0cd91683-f2a5-487c-87fb-4bfb10bdc4721032022jpeg.png"
        },
        "date_of_birth": "1999-12-07T07:37:52.000Z",
        "place_of_birth": "ត្រាំង ស្លក្រាម សៀមរាប សៀមរាប\n\n",
        "nationality": "Cambodian",
        "phone": "096 85 000 29",
        "email": "phearom.ssp2018@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T07:56:50.801Z"
        },
        "__v": 0,
        "employee_id": "00400",
        "join_date": {
            "$date": "2021-11-01T07:56:54.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e610ba8a2abb8c17ff1e7e"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "634faf8428216566b4936743"
        },
        "national_id": "19092560",
        "khmer_name": {
            "first_name": "សាក់",
            "last_name": "ចាន់ន"
        },
        "latin_name": {
            "first_name": "Sakk",
            "last_name": "Channo"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b87b6868-e0ac-42f4-8265-c242bc9eba2f1052023jpeg.png",
            "name": "b87b6868-e0ac-42f4-8265-c242bc9eba2f1052023jpeg.png"
        },
        "date_of_birth": "1999-10-10T07:57:58.000Z",
        "place_of_birth": "មណ្ឌលបី ស្លក្រាម សៀមរាប សៀមរាប\n",
        "nationality": "Cambodian",
        "phone": "097 588 7860",
        "email": "sakchanno1010@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T08:04:20.538Z"
        },
        "__v": 0,
        "employee_id": "00398",
        "join_date": {
            "$date": "2021-11-01T08:04:23.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e611af8a2abb8c17ff1f31"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7990"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fb02928216566b4936784"
        },
        "national_id": "180912865",
        "khmer_name": {
            "first_name": "ឆើញ",
            "last_name": "ស៊ីប៉ូ"
        },
        "latin_name": {
            "first_name": "Chhoeunh",
            "last_name": "Sipou"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e3339afc-6063-4ec4-8365-cddafa538c671052023jpeg.png",
            "name": "e3339afc-6063-4ec4-8365-cddafa538c671052023jpeg.png"
        },
        "date_of_birth": "2000-11-08T08:04:55.000Z",
        "place_of_birth": "ទ្រាំង ស្លក្រាម សៀមរាប សៀមរាប\n\n",
        "nationality": "Cambodian",
        "phone": "096 925 6800",
        "email": "sipou.ssp2018@gmail.com",
        "current_address": "Siem Reap",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T08:07:05.393Z"
        },
        "__v": 0,
        "employee_id": "00399",
        "join_date": {
            "$date": "2021-11-01T08:07:08.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e611308a2abb8c17ff1ee6"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "adminRole": "block",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7991"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fb09c28216566b49367ba"
        },
        "national_id": "180760714",
        "khmer_name": {
            "first_name": "ភន់",
            "last_name": "ប្រុសភឹម"
        },
        "latin_name": {
            "first_name": "Phuon",
            "last_name": "Brosphoem"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/30955ba2-6b34-40a1-99be-ca6f441f14e31052023jpeg.png",
            "name": "30955ba2-6b34-40a1-99be-ca6f441f14e31052023jpeg.png"
        },
        "date_of_birth": "1998-07-20T08:07:21.000Z",
        "place_of_birth": "ខ្នារ ជ្រាវ សៀមរាប សៀមរាប\n\n",
        "nationality": "Cambodian",
        "phone": "077 750 173",
        "email": "phounbrosphoem@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T08:09:00.888Z"
        },
        "__v": 0,
        "employee_id": "00385",
        "join_date": {
            "$date": "2021-05-07T08:09:23.000Z"
        },
        "work_book": true,
        "contract": {
            "$oid": "63e612ea8a2abb8c17ff1f97"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7992"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "adminRole": "admin"
    },
    {
        "_id": {
            "$oid": "634fb15328216566b4936801"
        },
        "national_id": "180765629",
        "khmer_name": {
            "first_name": "ឈឿត",
            "last_name": "ស៊ុនហាក់"
        },
        "latin_name": {
            "first_name": "Chheurt",
            "last_name": "Sunhak"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c2a17082-d28b-4ee0-9759-5964e9fc81e01032022jpeg.png",
            "name": "c2a17082-d28b-4ee0-9759-5964e9fc81e01032022jpeg.png"
        },
        "date_of_birth": "1999-09-29T08:09:40.000Z",
        "place_of_birth": "តាភុល, ស្វាយដង្គំ, សៀមរាប, សៀមរាប\n\n",
        "nationality": "Cambodian",
        "phone": "078 827 773",
        "email": "asakuza777@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T08:12:03.830Z"
        },
        "__v": 0,
        "employee_id": "00395",
        "join_date": {
            "$date": "2021-10-01T08:12:43.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "634fb22628216566b4936875"
        },
        "national_id": "180856186",
        "khmer_name": {
            "first_name": "ផាវ",
            "last_name": "វិសាល"
        },
        "latin_name": {
            "first_name": "Phav",
            "last_name": "Visal\t"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9732e8d3-1298-44d5-9417-ecdff0d5e1771052023jpeg.png",
            "name": "9732e8d3-1298-44d5-9417-ecdff0d5e1771052023jpeg.png"
        },
        "date_of_birth": "1998-05-01T08:13:44.000Z",
        "place_of_birth": "តាអួសរ កំពង់ឃ្លាំង សូទ្រនិគម សៀមរាប\n",
        "nationality": "Cambodian",
        "phone": "096 774 2982",
        "email": "phavvisal16@gmail.com",
        "current_address": "Siem Reap",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T08:15:34.350Z"
        },
        "__v": 0,
        "employee_id": "00317",
        "join_date": {
            "$date": "2020-08-18T08:15:37.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e613988a2abb8c17ff200a"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7993"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fb2ed28216566b49368c6"
        },
        "national_id": "180812259",
        "khmer_name": {
            "first_name": "នឹង",
            "last_name": "វិចិត្រ"
        },
        "latin_name": {
            "first_name": "Noeng",
            "last_name": "Vichet"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/071f6da4-dca1-4494-9e2e-af20c4c6a2521032022jpeg.png",
            "name": "071f6da4-dca1-4494-9e2e-af20c4c6a2521032022jpeg.png"
        },
        "date_of_birth": "1999-04-02T08:15:49.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "015 844 166",
        "email": "vichet.noeng66@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T08:18:53.596Z"
        },
        "__v": 0,
        "employee_id": "00387",
        "join_date": {
            "$date": "2022-10-19T08:19:04.313Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "634fb4ad28216566b4936961"
        },
        "national_id": "180797192\n",
        "khmer_name": {
            "first_name": "កើត",
            "last_name": "កុសល្យ"
        },
        "latin_name": {
            "first_name": "Koet",
            "last_name": "Kosal"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0e7c5401-8955-49d1-892a-7f8c898e6f3d0542023jpeg.png",
            "name": "0e7c5401-8955-49d1-892a-7f8c898e6f3d0542023jpeg.png"
        },
        "date_of_birth": "2000-02-15T08:19:10.000Z",
        "place_of_birth": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប\n\n\n",
        "nationality": "Cambodian",
        "phone": "099 820 089",
        "email": "koetkosal2k@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "",
                "key": {
                    "$date": "2022-10-31T09:24:59.697Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T08:26:21.279Z"
        },
        "__v": 0,
        "employee_id": "00224",
        "join_date": {
            "$date": "2023-12-01T09:20:21.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e6133c8a2abb8c17ff1fce"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7994"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fca3728216566b494e380"
        },
        "national_id": "180946321",
        "khmer_name": {
            "first_name": "នឹង",
            "last_name": "សុធារ័ត្ន"
        },
        "latin_name": {
            "first_name": "Noeung",
            "last_name": "Sotheareath"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/deec2a1e-1341-4449-853d-8014b94fc2871052023jpeg.png",
            "name": "deec2a1e-1341-4449-853d-8014b94fc2871052023jpeg.png"
        },
        "date_of_birth": "1988-02-09T09:56:30.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "017 844 046",
        "email": "theareath@gmail.com",
        "current_address": "Siem Reap",
        "role": "head",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": [
            {
                "start_end_date": "",
                "title": "",
                "school": "",
                "key": {
                    "$date": "2022-12-26T03:24:40.493Z"
                }
            }
        ],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T09:58:15.299Z"
        },
        "__v": 0,
        "employee_id": "00318",
        "join_date": {
            "$date": "2020-09-01T03:22:39.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e60de38a2abb8c17ff1c94"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "adminRole": "block",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7995"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fcab328216566b494efc6"
        },
        "national_id": "078 497 300",
        "khmer_name": {
            "first_name": "ធី",
            "last_name": "ផានិត"
        },
        "latin_name": {
            "first_name": "Thy",
            "last_name": "Phanith"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/19ac0f13-334c-4eed-a858-e5ed81709dbb1052023jpeg.png",
            "name": "19ac0f13-334c-4eed-a858-e5ed81709dbb1052023jpeg.png"
        },
        "date_of_birth": "2000-04-05T09:56:30.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "078 497 300",
        "email": "panitstudent@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T10:00:19.344Z"
        },
        "__v": 0,
        "employee_id": "00352",
        "join_date": {
            "$date": "2022-12-26T09:47:28.343Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e60d2b8a2abb8c17ff1c53"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7996"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "634fcb1528216566b494f8a6"
        },
        "national_id": "016​ 932 334",
        "khmer_name": {
            "first_name": "កេង",
            "last_name": "សូបិន"
        },
        "latin_name": {
            "first_name": "Keng",
            "last_name": " Soben"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f626d905-3a2c-4469-a297-bf5e0d3b36e61032022jpeg.png",
            "name": "f626d905-3a2c-4469-a297-bf5e0d3b36e61032022jpeg.png"
        },
        "date_of_birth": "2022-10-19T09:56:30.856Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "016​ 932 334",
        "email": "thomb6909@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-19T10:01:57.964Z"
        },
        "__v": 0,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6353b28a82da276b1b9a9394"
        },
        "national_id": "180536707\n\n",
        "khmer_name": {
            "first_name": "ម៉ៃ     ",
            "last_name": "មុត "
        },
        "latin_name": {
            "first_name": "Mai ",
            "last_name": "Mut"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/8576cb4d-801e-4aa7-8ae1-ccbf9a9288521052023jpeg.png",
            "name": "8576cb4d-801e-4aa7-8ae1-ccbf9a9288521052023jpeg.png"
        },
        "date_of_birth": "1997-09-05T09:01:38.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "078 883 708",
        "email": "mai.muth@pucsr.edukh",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានផ្នែកវិន័យសិស្ស\n",
                "key": {
                    "$date": "2022-11-01T06:59:13.691Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-22T09:06:18.512Z"
        },
        "__v": 0,
        "employee_id": "00105",
        "join_date": {
            "$date": "2018-01-12T09:06:54.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e1fed38a2abb8c17fe00c7"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7997"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635601aa82da276b1b9a9746"
        },
        "national_id": "180625025",
        "khmer_name": {
            "first_name": "ជីរ",
            "last_name": "សង្វាត"
        },
        "latin_name": {
            "first_name": "Chy",
            "last_name": "Sangvath"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/cfb7cbbe-b0be-4d38-ba9d-1ce6ff1db0941012022jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1968-04-09T17:00:00.000Z",
        "place_of_birth": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 461 846",
        "email": "Chy.angvath@gmail.com",
        "current_address": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "head",
        "type": "bod",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-24T03:08:26.652Z"
        },
        "__v": 0,
        "employee_id": "00107",
        "join_date": {
            "$date": "2018-01-01T03:13:52.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7998"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635602cc82da276b1b9a97cd"
        },
        "national_id": "10002017",
        "khmer_name": {
            "first_name": "ផេង",
            "last_name": "ខ្នារ"
        },
        "latin_name": {
            "first_name": "Pheng",
            "last_name": "Khna"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/99d8505f-9513-43ba-b143-897302157fc01012022jpeg.png",
            "name": "99d8505f-9513-43ba-b143-897302157fc01012022jpeg.png"
        },
        "date_of_birth": "1971-02-01T17:00:00.000Z",
        "place_of_birth": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cameroonian",
        "phone": "011 618 686",
        "email": "khnapheng@gmail.com",
        "current_address": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "bod",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-24T03:13:16.754Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2020-01-01T03:17:03.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7999"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635605f882da276b1b9a9915"
        },
        "national_id": "010064454(01)",
        "khmer_name": {
            "first_name": "បួន",
            "last_name": "សារី"
        },
        "latin_name": {
            "first_name": "Boun",
            "last_name": "Sary"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4394ae56-a2d0-4f74-a2e0-6e26424f3f371012022jpeg.png",
            "name": "4394ae56-a2d0-4f74-a2e0-6e26424f3f371012022jpeg.png"
        },
        "date_of_birth": "1980-09-12T03:18:38.000Z",
        "place_of_birth": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 856 187",
        "email": "sary.boun@yahoo.com",
        "current_address": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "bod",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-24T03:26:48.661Z"
        },
        "__v": 0,
        "contract": null,
        "working_status": "working",
        "employee_id": "",
        "join_date": {
            "$date": "2023-03-21T04:35:41.362Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d799a"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635606c882da276b1b9a9979"
        },
        "national_id": "190005169",
        "khmer_name": {
            "first_name": "នួន",
            "last_name": "រចនា"
        },
        "latin_name": {
            "first_name": "Noun",
            "last_name": "Rachana"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7a63dce8-b0c3-4c47-9639-d14b4cb4e6711012022jpeg.png",
            "name": "7a63dce8-b0c3-4c47-9639-d14b4cb4e6711012022jpeg.png"
        },
        "date_of_birth": "1969-12-01T03:18:38.000Z",
        "place_of_birth": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 917 379",
        "email": "rachana_nuon@gmail.com",
        "current_address": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "bod",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-24T03:30:16.597Z"
        },
        "__v": 0,
        "contract": null,
        "working_status": "working",
        "employee_id": "",
        "join_date": {
            "$date": "2023-03-21T04:36:32.886Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d799b"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6356075b82da276b1b9a99b8"
        },
        "national_id": "190005169(01)",
        "khmer_name": {
            "first_name": "ឡុក",
            "last_name": "ឡងឌី"
        },
        "latin_name": {
            "first_name": "Lok",
            "last_name": "Lundy"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/edfdb759-2987-41aa-858e-31235dbadac31052023jpeg.png",
            "name": "edfdb759-2987-41aa-858e-31235dbadac31052023jpeg.png"
        },
        "date_of_birth": "1980-11-04T03:18:38.000Z",
        "place_of_birth": "អូរអំបិល ទឹកថ្លា សិរីសោភ័ណ ប.ជ",
        "nationality": "Cambodian",
        "phone": "012 770 168",
        "email": "loklundy@gmail.com",
        "current_address": "តាភុល ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "bod",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-24T03:32:43.557Z"
        },
        "__v": 0,
        "employee_id": "0001",
        "join_date": {
            "$date": "2022-10-24T03:32:55.573Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646f2f8b38d31ba2fce9565b"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d799c"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6356084382da276b1b9a9a29"
        },
        "national_id": "180548448",
        "khmer_name": {
            "first_name": "មៀច",
            "last_name": "ម៉ានុត"
        },
        "latin_name": {
            "first_name": "Miech",
            "last_name": "Manut"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c30df157-030a-44d6-8e71-b859d4be9cb91052023jpeg.png",
            "name": "c30df157-030a-44d6-8e71-b859d4be9cb91052023jpeg.png"
        },
        "date_of_birth": "1997-10-04T03:33:22.000Z",
        "place_of_birth": "តាជេត សំរោងយា ពួក សៀមរាប ",
        "nationality": "Cambodian",
        "phone": "017 379 670",
        "email": "Miechmanut123@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "ប្រធានកិច្ចការសិក្សាធិការ",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-31T08:24:30.167Z"
                }
            }
        ],
        "edu_background": [
            {
                "start_end_date": "",
                "title": "",
                "school": "",
                "key": {
                    "$date": "2022-10-31T08:26:37.019Z"
                }
            }
        ],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-24T03:36:35.098Z"
        },
        "__v": 0,
        "employee_id": "00274",
        "join_date": {
            "$date": "2019-11-16T08:24:26.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e768f48a2abb8c17ff74b6"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d799d"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f880582da276b1b9ac154"
        },
        "national_id": "180471152\n",
        "khmer_name": {
            "first_name": "អុឹងលាក់ ",
            "last_name": "ស្វាហាប់"
        },
        "latin_name": {
            "first_name": "Ungleak ",
            "last_name": "Swahap"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/01fd3d72-af0e-495c-9f0c-446be2f890f20542023jpeg.png",
            "name": "01fd3d72-af0e-495c-9f0c-446be2f890f20542023jpeg.png"
        },
        "date_of_birth": "1993-02-04T08:29:01.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "017 729 282",
        "email": "ungleakswahab@gmail.com",
        "current_address": "Siem Reap",
        "role": "head",
        "type": "management",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School\n",
                "company": "ជំ.នាយក/ប្រ.ការិយាល័យហ្គោគ្លូប៊លហ្វាម",
                "key": {
                    "$date": "2022-10-31T08:32:28.315Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T08:32:05.389Z"
        },
        "__v": 0,
        "employee_id": "00026",
        "join_date": {
            "$date": "2015-11-16T08:32:25.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9e4192b4b8821e89e861c"
        },
        "working_status": "working",
        "adminRole": "block",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d799e"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f892882da276b1b9ac282"
        },
        "national_id": "180631806\n",
        "khmer_name": {
            "first_name": " ឃ្លោក ",
            "last_name": "ថាវ័ន្ត"
        },
        "latin_name": {
            "first_name": "Khlok ",
            "last_name": "Thavan"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c2bebbf7-4e89-4321-91d2-704cc8f2c2581052023jpeg.png",
            "name": "c2bebbf7-4e89-4321-91d2-704cc8f2c2581052023jpeg.png"
        },
        "date_of_birth": "1993-06-02T08:33:59.000Z",
        "place_of_birth": "ខ្នារជើង ក្រូចគរ ក្រឡាញ់ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 383 167",
        "email": "thavan0905@gmail.com",
        "current_address": "ស្ទឹងថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "2022-Present ",
                "title": "ប្រធានកិច្ចការរដ្ឋបាល និងធនធានមនុស្ស\n",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-31T08:37:12.499Z"
                }
            },
            {
                "start_end_date": "2021-2022",
                "title": "Deputy of Administrative and Financial Affairs Director ",
                "company": "Go Global School ",
                "key": {
                    "$date": "2023-11-16T08:46:50.530Z"
                }
            },
            {
                "start_end_date": "2020-2021",
                "title": "Head of Administrative Office ",
                "company": "Go Global School ",
                "key": {
                    "$date": "2023-11-16T08:46:51.454Z"
                }
            },
            {
                "start_end_date": "2019-2020",
                "title": "Chief Human Resources ",
                "company": "Go Global School ",
                "key": {
                    "$date": "2023-11-16T08:46:51.942Z"
                }
            },
            {
                "start_end_date": "2018-2019",
                "title": "Deputy of Front Office Director ",
                "company": "Go Global School",
                "key": {
                    "$date": "2023-11-16T08:46:52.302Z"
                }
            },
            {
                "start_end_date": "2016-2018",
                "title": "Marketing and Public Relation ",
                "company": "Go Global School ",
                "key": {
                    "$date": "2023-11-16T08:52:12.370Z"
                }
            },
            {
                "start_end_date": "2015-2016",
                "title": "Credit Officer",
                "company": "Go Credit ",
                "key": {
                    "$date": "2023-11-16T08:52:54.002Z"
                }
            }
        ],
        "edu_background": [
            {
                "start_end_date": "2022-2024",
                "title": "MBA",
                "school": "Build Bright University ",
                "key": {
                    "$date": "2023-11-16T08:43:07.980Z"
                }
            },
            {
                "start_end_date": "2012-2016",
                "title": "BBA",
                "school": "Build Bright University ",
                "key": {
                    "$date": "2023-11-16T08:43:59.145Z"
                }
            },
            {
                "start_end_date": "2016",
                "title": "General English (Graduated)",
                "school": "ACE",
                "key": {
                    "$date": "2023-11-16T08:53:44.587Z"
                }
            }
        ],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T08:36:56.619Z"
        },
        "__v": 0,
        "employee_id": "00039",
        "join_date": {
            "$date": "2016-10-01T08:37:09.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e7695a8a2abb8c17ff7566"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d799f"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "adminRole": "admin"
    },
    {
        "_id": {
            "$oid": "635f8aeb82da276b1b9ac431"
        },
        "national_id": "190432860 (01)",
        "khmer_name": {
            "first_name": "ស៊ត់ ",
            "last_name": "សារីណា"
        },
        "latin_name": {
            "first_name": "Sout ",
            "last_name": "Sarina"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/63ee2b9a-4e50-42f8-9983-74106e456d9b1052023jpeg.png",
            "name": "63ee2b9a-4e50-42f8-9983-74106e456d9b1052023jpeg.png"
        },
        "date_of_birth": "1994-10-23T08:40:48.000Z",
        "place_of_birth": "បន្ទាយនាង បន្ទាយនាង មង្គលបូរី ប.ជ",
        "nationality": "Cambodian",
        "phone": "098 390 386",
        "email": "sarina.sout@gmail.com",
        "current_address": "ដកពោធិ ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "married",
        "federation_and_dependent_children": 1,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "អនុប្រធានកិច្ចការរដ្ឋបាល និងហិរញ្ញវត្ថុ\n",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-31T08:45:21.865Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T08:44:27.583Z"
        },
        "__v": 0,
        "employee_id": "00344",
        "join_date": {
            "$date": "2020-10-02T08:44:42.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e768468a2abb8c17ff7388"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a0"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f8bb482da276b1b9ac4ff"
        },
        "national_id": "170771435",
        "khmer_name": {
            "first_name": "ផុន​ ",
            "last_name": "សុខលីន"
        },
        "latin_name": {
            "first_name": "Phon ",
            "last_name": "Soklin"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0b2baf74-e464-4660-882e-3e11d55841671052023jpeg.png",
            "name": "0b2baf74-e464-4660-882e-3e11d55841671052023jpeg.png"
        },
        "date_of_birth": "2022-10-31T08:45:53.933Z",
        "place_of_birth": "បន្យាយត្រែង បន្សាយត្រែង បាត់ដំបង បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "092 946 498",
        "email": "soklinphon@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "ប្រ.ការិយាល័យរដ្ឋបាល និងធនធានមនុស្ស\n",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-31T08:48:04.892Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T08:47:48.541Z"
        },
        "__v": 0,
        "employee_id": "00014",
        "join_date": {
            "$date": "2015-09-01T08:48:02.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e767d28a2abb8c17ff72d0"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "adminRole": "admin",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a1"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f8c8282da276b1b9ac5ce"
        },
        "national_id": "180485307",
        "khmer_name": {
            "first_name": "ម៉ៅ ",
            "last_name": "សុដាន្នី"
        },
        "latin_name": {
            "first_name": "Mao ",
            "last_name": "Sodany"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1135f421-b886-4217-968e-dddfc23ea5a31052023jpeg.png",
            "name": "1135f421-b886-4217-968e-dddfc23ea5a31052023jpeg.png"
        },
        "date_of_birth": "2022-10-31T08:49:43.476Z",
        "place_of_birth": "បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "010 281 877",
        "email": "sudanymao2023@gmail.com",
        "current_address": "កក្រាញ់, សៀមរាប, សៀមរាប, សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "ប្រធានការិយាល័យហិរញ្ញវត្ថុ \n",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-31T08:52:31.167Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T08:51:14.232Z"
        },
        "__v": 0,
        "employee_id": "0003",
        "join_date": {
            "$date": "2016-02-01T08:51:24.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e767838a2abb8c17ff7225"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a2"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f8d8882da276b1b9ac6c0"
        },
        "national_id": "190846218",
        "khmer_name": {
            "first_name": " កែវ ",
            "last_name": "គិមសួរ"
        },
        "latin_name": {
            "first_name": "Keo ",
            "last_name": "Kimsour"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/57a68703-ddbe-4835-85dd-b2e960e679ea1052023jpeg.png",
            "name": "57a68703-ddbe-4835-85dd-b2e960e679ea1052023jpeg.png"
        },
        "date_of_birth": "2022-10-31T08:53:19.287Z",
        "place_of_birth": "ប៉ោយក្ដឿង ព្រះនេត្រព្រះ ព្រះនេត្រព្រះ ប.ជ",
        "nationality": "Cambodian",
        "phone": "081 505 506",
        "email": "kimsourkeo1994@gmail.com",
        "current_address": "តាភុល ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "ប្រធានការិយាល័យសន្និធិ\n",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-31T08:55:49.077Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T08:55:36.517Z"
        },
        "__v": 0,
        "employee_id": "00018",
        "join_date": {
            "$date": "2015-10-01T08:55:46.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e765fd8a2abb8c17ff6fed"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a3"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f8e9482da276b1b9ac7c3"
        },
        "national_id": "150553047",
        "khmer_name": {
            "first_name": "ស៊ា ",
            "last_name": "ម៉ាលី"
        },
        "latin_name": {
            "first_name": "Sea ",
            "last_name": "Maly"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b0f7a4a7-5751-4ad8-93ad-7fe70662c9821042023jpeg.png",
            "name": "b0f7a4a7-5751-4ad8-93ad-7fe70662c9821042023jpeg.png"
        },
        "date_of_birth": "1995-12-11T08:57:45.000Z",
        "place_of_birth": "ទ្រា ទ្រា ស្ទោង កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "012 688 914",
        "email": "seamaly12@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "ប្រធានការិយាល័យផ្ដល់ព័ត៌មាន\n",
                "company": "Go Global School",
                "key": {
                    "$date": "2022-10-31T09:00:18.826Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T09:00:04.448Z"
        },
        "__v": 0,
        "employee_id": "00064",
        "join_date": {
            "$date": "2017-07-01T09:00:15.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e765b58a2abb8c17ff6f62"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "adminRole": "admin",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a4"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f8fc682da276b1b9ac8ee"
        },
        "national_id": "190484729",
        "khmer_name": {
            "first_name": " សេង ",
            "last_name": "លីវ័ន្ដ"
        },
        "latin_name": {
            "first_name": "Seng ",
            "last_name": "Lyone"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f6be77f2-899d-4443-af35-c8cf588634b71052023jpeg.png",
            "name": "f6be77f2-899d-4443-af35-c8cf588634b71052023jpeg.png"
        },
        "date_of_birth": "1995-10-19T09:01:47.000Z",
        "place_of_birth": "ថ្មី គំរូ ថ្មពួក បន្ទាយមានជ័យ",
        "nationality": "Cambodian",
        "phone": "085 717 135",
        "email": "lyoneseng99@gmail.com",
        "current_address": "ត្រៀក សៀមរាប សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School\n",
                "company": "ប្រធានអាហារដ្ឋាន",
                "key": {
                    "$date": "2022-10-31T09:10:09.030Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T09:05:10.817Z"
        },
        "__v": 0,
        "employee_id": "00326",
        "join_date": {
            "$date": "2020-10-19T09:05:32.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e7654e8a2abb8c17ff6e8b"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a5"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f962b82da276b1b9ace5a"
        },
        "national_id": "180619702",
        "khmer_name": {
            "first_name": "ម៉ា ",
            "last_name": "រីណាត"
        },
        "latin_name": {
            "first_name": "Ma ",
            "last_name": "Rynath"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b858c51f-5262-4762-baa5-ac7db83cd4e41012022jpeg.png",
            "name": "b858c51f-5262-4762-baa5-ac7db83cd4e41012022jpeg.png"
        },
        "date_of_birth": "1996-10-17T09:30:26.000Z",
        "place_of_birth": "ស្លក្រាម  សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "078 441 991",
        "email": "marynath19@gmail.com",
        "current_address": "ដកពោធិ៍ ស្លក្រាម  សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានការិយាល័យសិក្សា\n",
                "key": {
                    "$date": "2022-10-31T09:33:48.577Z"
                }
            },
            {
                "start_end_date": "",
                "title": "",
                "company": "",
                "key": {
                    "$date": "2022-10-31T09:34:41.651Z"
                }
            },
            {
                "start_end_date": "",
                "title": "",
                "company": "",
                "key": {
                    "$date": "2022-10-31T09:34:43.251Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T09:32:27.662Z"
        },
        "__v": 0,
        "employee_id": "00129",
        "join_date": {
            "$date": "2018-06-11T09:32:46.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "635f973d82da276b1b9acf6b"
        },
        "national_id": "180553342",
        "khmer_name": {
            "first_name": "លួន ",
            "last_name": "សុភាព"
        },
        "latin_name": {
            "first_name": "Luon ",
            "last_name": "Sopheap"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/39be1654-548a-43e8-8525-fe5d679966851052023jpeg.png",
            "name": "39be1654-548a-43e8-8525-fe5d679966851052023jpeg.png"
        },
        "date_of_birth": "1996-10-05T09:35:11.000Z",
        "place_of_birth": "ត្រមេង ខ្នាត ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "085 223 748",
        "email": "luonsopheap2201@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានការិយាល័យកម្មវិធីភាសាបរទេស\n",
                "key": {
                    "$date": "2022-10-31T09:37:20.691Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T09:37:01.923Z"
        },
        "__v": 0,
        "employee_id": "00217",
        "join_date": {
            "$date": "2020-06-15T09:37:18.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e764f58a2abb8c17ff6dca"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a6"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f987d82da276b1b9ad07d"
        },
        "national_id": "180766742",
        "khmer_name": {
            "first_name": "ពៅ ",
            "last_name": "ស្រីនិច"
        },
        "latin_name": {
            "first_name": "Peou ",
            "last_name": "Sreynich"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/da90a9cb-e8f9-4787-84b5-766708b28e231012022jpeg.png",
            "name": "da90a9cb-e8f9-4787-84b5-766708b28e231012022jpeg.png"
        },
        "date_of_birth": "2022-10-31T09:40:46.235Z",
        "place_of_birth": "ពោធិបុស្ស ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 942 8226",
        "email": "peousreynich@gmail.com",
        "current_address": "ពោធិបុស្ស ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានការរិយាល័យកម្មវិធីភាសាខ្មែរ\n",
                "key": {
                    "$date": "2022-10-31T09:42:57.724Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T09:42:21.253Z"
        },
        "__v": 0,
        "employee_id": "00072",
        "join_date": {
            "$date": "2017-10-01T09:42:55.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "635f9c1482da276b1b9ad1aa"
        },
        "national_id": "180484099",
        "khmer_name": {
            "first_name": "ដោម ",
            "last_name": "ក្រឹម"
        },
        "latin_name": {
            "first_name": "Doum ",
            "last_name": "Kroem"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/8451c48a-870e-4203-9204-ffd86aaef73e1052023jpeg.png",
            "name": "8451c48a-870e-4203-9204-ffd86aaef73e1052023jpeg.png"
        },
        "date_of_birth": "1992-07-05T09:51:26.000Z",
        "place_of_birth": "ត្រពាំងវែង, ក្របីរៀល, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "078 523 606",
        "email": "dkabcsandrice@gmail.com",
        "current_address": "ត្រពាំងវែង, ក្របីរៀល, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": [
            {
                "key": {
                    "$date": "2023-02-18T14:23:07.709Z"
                },
                "start_end_date": "123424",
                "title": "បបស 02383093"
            }
        ],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ជំ.អនុប្រ.កិច្ចការរដ្ឋបាល និងហិរញ្ញវត្ថុ\n",
                "key": {
                    "$date": "2022-10-31T10:01:08.383Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T09:57:40.124Z"
        },
        "__v": 0,
        "employee_id": "00482",
        "join_date": {
            "$date": "2022-10-17T09:58:30.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e75a6f8a2abb8c17ff5bc7"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a7"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635f9df082da276b1b9ad23a"
        },
        "national_id": "180535733",
        "khmer_name": {
            "first_name": "យ៉េង ",
            "last_name": "នេត"
        },
        "latin_name": {
            "first_name": "Yeang ",
            "last_name": "Neth"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ec4beadc-b0a6-4029-a7aa-b2f32e10778e1012022jpeg.png",
            "name": "ec4beadc-b0a6-4029-a7aa-b2f32e10778e1012022jpeg.png"
        },
        "date_of_birth": "1994-04-07T10:03:46.000Z",
        "place_of_birth": "ថ្នល់ចែក កៀនសង្កែ សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 418 1797",
        "email": "yengneth4181@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "រដ្ឋបាល\n",
                "key": {
                    "$date": "2022-10-31T10:10:32.808Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T10:05:36.919Z"
        },
        "__v": 0,
        "employee_id": "00252",
        "join_date": {
            "$date": "2019-11-01T10:09:25.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "635f9fd282da276b1b9ad307"
        },
        "national_id": "180988806",
        "khmer_name": {
            "first_name": "ហឿន ",
            "last_name": "ឈុនលី"
        },
        "latin_name": {
            "first_name": "Hoeurn ",
            "last_name": "Chhunly"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ee3cd7c5-be2f-4ca2-854a-19ef5c78cce51012022jpeg.png",
            "name": "ee3cd7c5-be2f-4ca2-854a-19ef5c78cce51012022jpeg.png"
        },
        "date_of_birth": "2001-04-07T10:11:46.000Z",
        "place_of_birth": "រវៀងថ្មី, ស្រែខ្វាវ, អង្គរជុំ, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "090​ 777 021",
        "email": "hoeurnchhunly777@gmail.com",
        "current_address": "បឹងដូនប៉ា, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ផ្នែករដ្ឋបាល\n",
                "key": {
                    "$date": "2022-10-31T10:13:52.626Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T10:13:38.942Z"
        },
        "__v": 0,
        "employee_id": "00470",
        "join_date": {
            "$date": "2022-09-01T10:13:50.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e75a208a2abb8c17ff5b75"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a8"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635fa11e82da276b1b9ad39e"
        },
        "national_id": "180928498",
        "khmer_name": {
            "first_name": "កូយ ",
            "last_name": "គិនយី"
        },
        "latin_name": {
            "first_name": "Kouy ",
            "last_name": "Kinyi"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/062092b9-7cf5-4c04-bdb5-99612b3ca8251052023jpeg.png",
            "name": "062092b9-7cf5-4c04-bdb5-99612b3ca8251052023jpeg.png"
        },
        "date_of_birth": "2001-12-21T10:16:35.000Z",
        "place_of_birth": "ព្រៃលាន ពពេល សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "061 544 194",
        "email": "kouykinyi@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "រដ្ឋបាល\n",
                "key": {
                    "$date": "2022-10-31T10:20:18.152Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T10:19:10.562Z"
        },
        "__v": 0,
        "employee_id": "00381",
        "join_date": {
            "$date": "2022-02-15T10:19:20.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e759c28a2abb8c17ff5b15"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79a9"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635fa38c82da276b1b9ad4a4"
        },
        "national_id": "180572666",
        "khmer_name": {
            "first_name": "ឌន់               ",
            "last_name": "ដាំ    "
        },
        "latin_name": {
            "first_name": "Dun ",
            "last_name": "Dam"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/cea06737-10c6-4495-a7e8-1f04b912c2b01052023jpeg.png",
            "name": "cea06737-10c6-4495-a7e8-1f04b912c2b01052023jpeg.png"
        },
        "date_of_birth": "1995-05-25T10:21:09.000Z",
        "place_of_birth": "សសរស្តម្ភ, សសរស្តម្ភ, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "098 577 196",
        "email": "dundam@gmail.com",
        "current_address": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកបើកបរ និងជួសជុល\n",
                "key": {
                    "$date": "2022-11-01T00:12:38.857Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T10:29:32.424Z"
        },
        "__v": 0,
        "employee_id": "00045",
        "join_date": {
            "$date": "2016-11-21T00:10:24.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e7597a8a2abb8c17ff5ac9"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79aa"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635fa40c82da276b1b9ad4e2"
        },
        "national_id": "180558792",
        "khmer_name": {
            "first_name": "វន់ ",
            "last_name": "សាន"
        },
        "latin_name": {
            "first_name": "Von ",
            "last_name": "San"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/847a6ebf-3079-47e4-b985-38ce7fa44e731052023jpeg.png",
            "name": "847a6ebf-3079-47e4-b985-38ce7fa44e731052023jpeg.png"
        },
        "date_of_birth": "1996-02-08T10:30:13.000Z",
        "place_of_birth": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 352 27 50",
        "email": "vonsan@gmail.com",
        "current_address": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកបើកបរ និងជួសជុល\n",
                "key": {
                    "$date": "2022-11-01T00:14:51.398Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T10:31:40.328Z"
        },
        "__v": 0,
        "employee_id": "00121",
        "join_date": {
            "$date": "2018-05-16T10:31:52.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e7591f8a2abb8c17ff5a79"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ab"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635fa4ca82da276b1b9ad54f"
        },
        "national_id": "180810842",
        "khmer_name": {
            "first_name": "ជឿម ",
            "last_name": "សុខៅ"
        },
        "latin_name": {
            "first_name": "Choeum ",
            "last_name": "Sokhao"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c6d6f2f9-5cb5-4d90-b045-e0356e18b42b1052023jpeg.png",
            "name": "c6d6f2f9-5cb5-4d90-b045-e0356e18b42b1052023jpeg.png"
        },
        "date_of_birth": "1995-03-06T10:32:30.000Z",
        "place_of_birth": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "010 831 177",
        "email": "choeumsokhao@gmail.com",
        "current_address": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកបើកបរ និងជួសជុល\n",
                "key": {
                    "$date": "2022-11-01T00:17:47.395Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T10:34:50.321Z"
        },
        "__v": 0,
        "employee_id": "00278",
        "join_date": {
            "$date": "2019-12-02T00:16:22.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e758358a2abb8c17ff59b7"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ac"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "635fa60d82da276b1b9ad5ef"
        },
        "national_id": "180719520",
        "khmer_name": {
            "first_name": "ឡង់ ",
            "last_name": "សីហា"
        },
        "latin_name": {
            "first_name": "Lang ",
            "last_name": "Seyha"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b3d82a00-5626-48de-a4a3-aae57b7d51311052023jpeg.png",
            "name": "b3d82a00-5626-48de-a4a3-aae57b7d51311052023jpeg.png"
        },
        "date_of_birth": "1993-11-15T10:35:23.000Z",
        "place_of_birth": "គោកក្រសាំង ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "071 4238 980",
        "email": "langseyha@gmail.com",
        "current_address": "គោកក្រសាំង ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "សន្ដិសុខ និងជួសជុល\n",
                "key": {
                    "$date": "2022-11-01T00:23:54.927Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-10-31T10:40:13.656Z"
        },
        "__v": 0,
        "employee_id": "00422",
        "join_date": {
            "$date": "2022-01-10T00:22:06.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e757288a2abb8c17ff5920"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ad"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360682c82da276b1b9ad93e"
        },
        "national_id": "180757045",
        "khmer_name": {
            "first_name": "ឈឿត ",
            "last_name": "រស់ជាតិ"
        },
        "latin_name": {
            "first_name": "Chhoeut ",
            "last_name": "Roscheat"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/abb12e5c-04e2-41c4-9602-aa201407ce6e1052023jpeg.png",
            "name": "abb12e5c-04e2-41c4-9602-aa201407ce6e1052023jpeg.png"
        },
        "date_of_birth": "1992-03-10T00:24:16.000Z",
        "place_of_birth": "គោកដូង ទឹកវិល សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "010​ 430 211",
        "email": "chhoeutroscheat@gmil.com",
        "current_address": "គោកដូង ទឹកវិល សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "សន្ដិសុខ និងជួសជុល",
                "key": {
                    "$date": "2022-11-01T00:30:06.268Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T00:28:28.760Z"
        },
        "__v": 0,
        "employee_id": "00362",
        "join_date": {
            "$date": "2020-11-10T00:28:43.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e756558a2abb8c17ff5881"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ae"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63606a6582da276b1b9ada37"
        },
        "national_id": "180325766 (0)",
        "khmer_name": {
            "first_name": "ហល់ ",
            "last_name": "មៀច"
        },
        "latin_name": {
            "first_name": "Hall ",
            "last_name": "Miech"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/d90afedd-ad30-4cfc-8572-a9dde6d9d6121122022jpg.png",
            "name": "d90afedd-ad30-4cfc-8572-a9dde6d9d6121122022jpg.png"
        },
        "date_of_birth": "2022-11-01T00:35:32.474Z",
        "place_of_birth": "កន្ត្រក, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 243 6775",
        "email": "hallmiech@gmail.com",
        "current_address": "កន្ត្រក ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "សន្ដិសុខ\n",
                "key": {
                    "$date": "2022-11-01T00:38:34.942Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T00:37:57.757Z"
        },
        "__v": 0,
        "employee_id": "00478",
        "join_date": {
            "$date": "2022-10-10T00:38:19.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63606bb582da276b1b9adaca"
        },
        "national_id": "180659658",
        "khmer_name": {
            "first_name": "ព្រឿង ",
            "last_name": "ប្រម"
        },
        "latin_name": {
            "first_name": "Proeurng ",
            "last_name": "Prorm"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f2ad3158-30d5-49ce-8dc1-3fbd23d838ba1052023jpeg.png",
            "name": "f2ad3158-30d5-49ce-8dc1-3fbd23d838ba1052023jpeg.png"
        },
        "date_of_birth": "1966-04-04T00:40:08.000Z",
        "place_of_birth": "ភ្លង់, លាងដៃ, អង្គរធំ, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 577 2836",
        "email": "proeurngprorm@gmail.com",
        "current_address": "ភ្លង់, លាងដៃ, អង្គរធំ, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T00:43:33.414Z"
        },
        "__v": 0,
        "employee_id": "00024",
        "join_date": {
            "$date": "2022-11-01T00:44:24.949Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e752d18a2abb8c17ff56cd"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79af"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63606c9782da276b1b9adb42"
        },
        "national_id": "180307358",
        "khmer_name": {
            "first_name": "ហេ             ",
            "last_name": " រ៉ាំ  "
        },
        "latin_name": {
            "first_name": "He ",
            "last_name": "Ram"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/51cc2b54-cf69-481b-bc16-9ac9c5562c3e1052023jpeg.png",
            "name": "51cc2b54-cf69-481b-bc16-9ac9c5562c3e1052023jpeg.png"
        },
        "date_of_birth": "1984-03-16T00:44:58.000Z",
        "place_of_birth": "កន្ត្រក ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "069 780 875",
        "email": "heram@gmail.com",
        "current_address": "កន្ត្រក ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកអនាម័យ\n",
                "key": {
                    "$date": "2022-11-01T00:48:29.573Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T00:47:19.661Z"
        },
        "__v": 0,
        "employee_id": "00052",
        "join_date": {
            "$date": "2017-02-01T00:47:31.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e752828a2abb8c17ff5687"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b0"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63606dd282da276b1b9adbcb"
        },
        "national_id": "180810851",
        "khmer_name": {
            "first_name": "ស្ដើង ​",
            "last_name": "ផុស"
        },
        "latin_name": {
            "first_name": "Sdoueng ",
            "last_name": "Phors"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e8771c29-f5ef-46bf-a08e-a79cb504120b1052023jpeg.png",
            "name": "e8771c29-f5ef-46bf-a08e-a79cb504120b1052023jpeg.png"
        },
        "date_of_birth": "1995-01-10T00:49:51.000Z",
        "place_of_birth": "គោកដូង ទឹកវិល សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "011 284 027",
        "email": "sdouemgphors@gmail.com",
        "current_address": "គោកដូង ទឹកវិល សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-01T00:53:46.108Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T00:52:34.286Z"
        },
        "__v": 0,
        "employee_id": "00289",
        "join_date": {
            "$date": "2019-12-16T00:52:52.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e210b68a2abb8c17fe0d99"
        },
        "working_status": "resign",
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "63606ef882da276b1b9adc55"
        },
        "national_id": "180371237",
        "khmer_name": {
            "first_name": "ហឿន ",
            "last_name": "សាវន"
        },
        "latin_name": {
            "first_name": "Hoeurn ",
            "last_name": "Savon"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/631ff0e9-a9f8-4f0f-a0a7-15c9384878661052023jpeg.png",
            "name": "631ff0e9-a9f8-4f0f-a0a7-15c9384878661052023jpeg.png"
        },
        "date_of_birth": "1982-03-03T00:54:16.000Z",
        "place_of_birth": " ជប់ ជប់តាត្រាវ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 9611 509",
        "email": "hoeurnsavon@gmail.com",
        "current_address": "កន្ត្រក ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកអនាម័យ",
                "key": {
                    "$date": "2022-11-01T00:59:06.475Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T00:57:28.448Z"
        },
        "__v": 0,
        "employee_id": "00320",
        "join_date": {
            "$date": "2019-10-05T00:58:25.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e7520d8a2abb8c17ff563a"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b1"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360701f82da276b1b9add05"
        },
        "national_id": "180854468",
        "khmer_name": {
            "first_name": "រែម ",
            "last_name": "សុខី"
        },
        "latin_name": {
            "first_name": "Ream ",
            "last_name": "Sokhy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/cdd494a8-ac97-4f3d-ac87-d796a4248ed31052023jpeg.png",
            "name": "cdd494a8-ac97-4f3d-ac87-d796a4248ed31052023jpeg.png"
        },
        "date_of_birth": "2000-04-23T00:59:45.000Z",
        "place_of_birth": "ព្រៃធំ ស្រង៉ែ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 606 5381",
        "email": "reamsokhy@gmail.com",
        "current_address": "ព្រៃធំ ស្រង៉ែ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកអនាម័យ\n",
                "key": {
                    "$date": "2022-11-01T01:03:20.483Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:02:23.865Z"
        },
        "__v": 0,
        "employee_id": "00404",
        "join_date": {
            "$date": "2021-11-01T01:02:46.648Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e2164c8a2abb8c17fe150c"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b2"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636070fd82da276b1b9add82"
        },
        "national_id": "180072443(0)",
        "khmer_name": {
            "first_name": "សាន ",
            "last_name": "តឹ"
        },
        "latin_name": {
            "first_name": "San ",
            "last_name": "Toek"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f563fb3c-fa13-4792-af11-ac02ce2e8a1b1052023jpeg.png",
            "name": "f563fb3c-fa13-4792-af11-ac02ce2e8a1b1052023jpeg.png"
        },
        "date_of_birth": "1981-07-06T01:03:55.000Z",
        "place_of_birth": "អំពិលពាម, ខ្នាត, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 752 0172",
        "email": "santoek@gmail.com",
        "current_address": "អំពិលពាម, ខ្នាត, ពួក, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកអនាម័យ\n",
                "key": {
                    "$date": "2022-11-01T01:06:22.580Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:06:05.681Z"
        },
        "__v": 0,
        "employee_id": "00438",
        "join_date": {
            "$date": "2022-03-14T01:06:14.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae4402b4b8821e89efee3"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b3"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360723682da276b1b9ade04"
        },
        "national_id": "181055324",
        "khmer_name": {
            "first_name": "ណាង ",
            "last_name": "ធី"
        },
        "latin_name": {
            "first_name": "Nang ",
            "last_name": "Thy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/8f7aa782-e1ab-4828-90d8-ed1f6b1117a41122022jpeg.png",
            "name": "8f7aa782-e1ab-4828-90d8-ed1f6b1117a41122022jpeg.png"
        },
        "date_of_birth": "2004-12-04T01:08:30.000Z",
        "place_of_birth": "តាត្រាវ, ស្វាយចេក, អង្គរធំ, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 464 2108",
        "email": "nangthy@gmail.com",
        "current_address": "កន្ត្រក, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកអនាម័យ\n",
                "key": {
                    "$date": "2022-11-01T01:11:42.741Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:11:18.098Z"
        },
        "__v": 0,
        "employee_id": "00473",
        "join_date": {
            "$date": "2022-10-12T01:11:26.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360731782da276b1b9ade83"
        },
        "national_id": "180852997",
        "khmer_name": {
            "first_name": "លៀម ",
            "last_name": "សំបូរ"
        },
        "latin_name": {
            "first_name": "Leam ",
            "last_name": "Sambo"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4fc3d239-4b95-4ec3-8963-185d5d8dfe801122022jpeg.png",
            "name": "4fc3d239-4b95-4ec3-8963-185d5d8dfe801122022jpeg.png"
        },
        "date_of_birth": "2000-07-17T01:12:20.000Z",
        "place_of_birth": "ព្រៃធំ, ស្រង៉ែ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 284 794",
        "email": "leamsambo@gmail.com",
        "current_address": "កន្ត្រក, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកអនាម័យ\n",
                "key": {
                    "$date": "2022-11-01T01:16:04.731Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:15:03.121Z"
        },
        "__v": 0,
        "employee_id": "00477",
        "join_date": {
            "$date": "2022-10-08T01:15:46.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360743682da276b1b9adf09"
        },
        "national_id": "180371234 (0)",
        "khmer_name": {
            "first_name": "សែម ",
            "last_name": "សំរ៉ស់"
        },
        "latin_name": {
            "first_name": "Sem ",
            "last_name": "Samras"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4c46de80-82ff-4eee-8f73-6e2be87f20591122022jpeg.png",
            "name": "4c46de80-82ff-4eee-8f73-6e2be87f20591122022jpeg.png"
        },
        "date_of_birth": "1985-03-01T01:16:46.000Z",
        "place_of_birth": "តាត្រាវ, ស្វាយចេក, អង្គរធំ, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "068 496 510",
        "email": "semsamras@gmail.com",
        "current_address": "កន្ត្រក, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកអនាម័យ\n",
                "key": {
                    "$date": "2022-11-01T01:20:56.211Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:19:50.630Z"
        },
        "__v": 0,
        "employee_id": "00479",
        "join_date": {
            "$date": "2022-10-10T01:20:07.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae3912b4b8821e89efd28"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360751f82da276b1b9adf7e"
        },
        "national_id": "200231485",
        "khmer_name": {
            "first_name": "ភិន ",
            "last_name": "សំណាង"
        },
        "latin_name": {
            "first_name": "Phin ",
            "last_name": "Somnang"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1b98b4d8-4b2c-4c25-ba70-eebf3a4740551052023jpeg.png",
            "name": "1b98b4d8-4b2c-4c25-ba70-eebf3a4740551052023jpeg.png"
        },
        "date_of_birth": "2001-03-05T01:21:42.000Z",
        "place_of_birth": "ឯកភាព ត្រពាំងប្រីយ៍ អន្លង់វែង ឧ.ត",
        "nationality": "Cambodian",
        "phone": "097​​ 9884 270",
        "email": "somnangphin1@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានការិយាល័យធនធានមនុស្ស\n",
                "key": {
                    "$date": "2022-11-01T01:24:27.634Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:23:43.655Z"
        },
        "__v": 0,
        "employee_id": "00386",
        "join_date": {
            "$date": "2021-08-02T01:23:51.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9e0412b4b8821e89e8017"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b4"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360760182da276b1b9adfe9"
        },
        "national_id": "180959918",
        "khmer_name": {
            "first_name": "ផាន់ណា ",
            "last_name": "សុភក្ត្រា"
        },
        "latin_name": {
            "first_name": "Phanna ",
            "last_name": "Sopheaktra"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/6911f7e4-ab36-43e7-9503-57fb07f7d3940222023jpg.png",
            "name": "6911f7e4-ab36-43e7-9503-57fb07f7d3940222023jpg.png"
        },
        "date_of_birth": "2003-05-07T01:25:13.000Z",
        "place_of_birth": "ទក្សិណខាងត្បូង, គោកចក, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "099 855 811",
        "email": "sopheaktra@gmail.com",
        "current_address": "ទក្សិណខាងត្បូង, គោកចក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ធនធានមនុស្ស\n",
                "key": {
                    "$date": "2022-11-01T01:28:31.534Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:27:29.151Z"
        },
        "__v": 0,
        "employee_id": "00469",
        "join_date": {
            "$date": "2022-05-20T01:27:56.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9df9a2b4b8821e89e7fa0"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360775c82da276b1b9ae09e"
        },
        "national_id": "180465891",
        "khmer_name": {
            "first_name": "ហង្ស ",
            "last_name": "រស្មី"
        },
        "latin_name": {
            "first_name": "Hang ",
            "last_name": "Reaksmey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/66d42f35-8682-4c04-a119-ff9434030cf11052023jpeg.png",
            "name": "66d42f35-8682-4c04-a119-ff9434030cf11052023jpeg.png"
        },
        "date_of_birth": "1989-01-01T01:29:16.000Z",
        "place_of_birth": "ស្ទឹងថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "069 467 235",
        "email": "hangreaksmey@gmail.com",
        "current_address": "ស្ទឹងថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គិលានុបដ្ឋាយិកា\n",
                "key": {
                    "$date": "2022-11-01T01:34:17.667Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:33:16.267Z"
        },
        "__v": 0,
        "employee_id": "00437",
        "join_date": {
            "$date": "2022-03-07T01:33:25.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e751a08a2abb8c17ff55dd"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b5"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360784b82da276b1b9ae106"
        },
        "national_id": "61146700",
        "khmer_name": {
            "first_name": "ខូវ ",
            "last_name": "ស៊ូខេង"
        },
        "latin_name": {
            "first_name": "Khov ",
            "last_name": "Soukheng "
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/6e40e1a9-26f4-4efd-bf76-6b7d557dddc41052023jpeg.png",
            "name": "6e40e1a9-26f4-4efd-bf76-6b7d557dddc41052023jpeg.png"
        },
        "date_of_birth": "1991-01-08T01:34:55.000Z",
        "place_of_birth": "អន្លង់តាអួរ កោះជីវាំង ឯកភ្នំ បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "070 551 231",
        "email": "soukhengkhov@gmail.com",
        "current_address": "កក្រាញ់ សៀមរាប សៀមរាប សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គណនេយ្យករ\n",
                "key": {
                    "$date": "2022-11-01T01:38:19.747Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:37:15.411Z"
        },
        "__v": 0,
        "employee_id": "00031",
        "join_date": {
            "$date": "2016-05-01T01:37:32.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e616308a2abb8c17ff2217"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b6"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360794782da276b1b9ae17d"
        },
        "national_id": "180827564",
        "khmer_name": {
            "first_name": "គឹម ",
            "last_name": "រចនា"
        },
        "latin_name": {
            "first_name": "Kim ",
            "last_name": "Rachana"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/49fc4b08-db0c-4aea-9424-9b871c75d2421122022jpeg.png",
            "name": "49fc4b08-db0c-4aea-9424-9b871c75d2421122022jpeg.png"
        },
        "date_of_birth": "2000-10-11T01:39:00.000Z",
        "place_of_birth": "អារញ្ញ, សៀមរាប, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 932 3029",
        "email": "rachanakim1@gmail.com",
        "current_address": "អារញ្ញ, សៀមរាប, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បេឡាករចំណាយ\n",
                "key": {
                    "$date": "2022-11-01T01:41:59.939Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:41:27.584Z"
        },
        "__v": 0,
        "employee_id": "00362",
        "join_date": {
            "$date": "2021-01-04T01:41:36.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e615b78a2abb8c17ff21bb"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63607a4c82da276b1b9ae1f6"
        },
        "national_id": "180852688",
        "khmer_name": {
            "first_name": "ឃួយ ",
            "last_name": "ឌីល្យាណ"
        },
        "latin_name": {
            "first_name": "Khuoy ",
            "last_name": "Dyyan"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9923248e-6bb2-425d-8794-feffbff038531052023jpeg.png",
            "name": "9923248e-6bb2-425d-8794-feffbff038531052023jpeg.png"
        },
        "date_of_birth": "1998-10-12T01:42:55.000Z",
        "place_of_birth": "បន្ទាយចាស់, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "092 522 464",
        "email": "diyanwh21@gmail.com",
        "current_address": "បន្ទាយចាស់, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គណនេយ្យករ\n",
                "key": {
                    "$date": "2022-11-01T01:46:34.459Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:45:48.500Z"
        },
        "__v": 0,
        "employee_id": "00453",
        "join_date": {
            "$date": "2022-05-23T01:46:06.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae4d62b4b8821e89f0127"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b7"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63607c0082da276b1b9ae2a3"
        },
        "national_id": "180815651",
        "khmer_name": {
            "first_name": "ពត ",
            "last_name": "ភានិត"
        },
        "latin_name": {
            "first_name": "Pot ",
            "last_name": "Pheanith"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4684394b-a371-4958-ba39-f2878a8ed0221052023jpeg.png",
            "name": "4684394b-a371-4958-ba39-f2878a8ed0221052023jpeg.png"
        },
        "date_of_birth": "1998-11-03T01:47:57.000Z",
        "place_of_birth": "គោកក្ដុល កំពង់ភ្លុក ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "061 726 035",
        "email": "potpheanith@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកបញ្ជាទិញ និងទទួលទំនិញ\n",
                "key": {
                    "$date": "2022-11-01T01:54:34.464Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:53:04.116Z"
        },
        "__v": 0,
        "employee_id": "00364",
        "join_date": {
            "$date": "2021-01-04T01:53:21.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e615748a2abb8c17ff2181"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b8"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63607d9e82da276b1b9ae337"
        },
        "national_id": "180738564",
        "khmer_name": {
            "first_name": "ផាយ ",
            "last_name": "សាវឌី"
        },
        "latin_name": {
            "first_name": "Phay ",
            "last_name": "Savdy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/2643e858-80e3-4f9a-a78e-bd2fc8d2ae711052023jpeg.png",
            "name": "2643e858-80e3-4f9a-a78e-bd2fc8d2ae711052023jpeg.png"
        },
        "date_of_birth": "1999-04-03T01:56:34.000Z",
        "place_of_birth": "ក្របៅ ប្រិយ៍ ស្រីស្នំ សៀមរាប ",
        "nationality": "Cambodian",
        "phone": "092 679 758",
        "email": "savdy2017@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "Marketing\n",
                "key": {
                    "$date": "2022-11-01T02:01:14.282Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T01:59:58.019Z"
        },
        "__v": 0,
        "employee_id": "00155",
        "join_date": {
            "$date": "2018-10-01T02:00:08.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e60ed18a2abb8c17ff1d1b"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79b9"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63607e9f82da276b1b9ae3b4"
        },
        "national_id": "180557658",
        "khmer_name": {
            "first_name": "ឆម ",
            "last_name": "លីនដា"
        },
        "latin_name": {
            "first_name": "Chhorm ",
            "last_name": "Linda"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/56cda8a9-ef96-4a74-bc61-a442a66ff3e81122022jpeg.png",
            "name": "56cda8a9-ef96-4a74-bc61-a442a66ff3e81122022jpeg.png"
        },
        "date_of_birth": "1996-11-03T02:02:16.000Z",
        "place_of_birth": "គ្រួស, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "098 777 505",
        "email": "lindachhorm7@gmail.com",
        "current_address": "គ្រួស, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកផ្ដល់ព័ត៌មាន\n",
                "key": {
                    "$date": "2022-11-01T02:04:39.180Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T02:04:15.582Z"
        },
        "__v": 0,
        "employee_id": "00476",
        "join_date": {
            "$date": "2022-10-01T02:04:27.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e615278a2abb8c17ff213d"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360804c82da276b1b9ae457"
        },
        "national_id": "180950899",
        "khmer_name": {
            "first_name": "ម៉ៅ ",
            "last_name": "ស្រីនិត"
        },
        "latin_name": {
            "first_name": "Mao ",
            "last_name": "Sreynith"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/dbdf7aee-6f17-4542-a7a1-04bf78649c851052023jpeg.png",
            "name": "dbdf7aee-6f17-4542-a7a1-04bf78649c851052023jpeg.png"
        },
        "date_of_birth": "2001-11-04T02:08:59.000Z",
        "place_of_birth": "ចុងកៅស៊ូ ស្លក្រាម សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "010 289 421",
        "email": "maosreynith61@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកចុះឈ្មោះ\n",
                "key": {
                    "$date": "2022-11-01T02:11:47.687Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T02:11:24.293Z"
        },
        "__v": 0,
        "employee_id": "00353",
        "join_date": {
            "$date": "2020-11-10T02:11:44.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e614e28a2abb8c17ff20f6"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ba"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360817582da276b1b9ae4ea"
        },
        "national_id": "1807659501",
        "khmer_name": {
            "first_name": "ចាប ",
            "last_name": "ផល្លា"
        },
        "latin_name": {
            "first_name": "Chab ",
            "last_name": "Phalla"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5356a893-ded8-4c6c-a4e1-a37c53678fc81052023jpeg.png",
            "name": "5356a893-ded8-4c6c-a4e1-a37c53678fc81052023jpeg.png"
        },
        "date_of_birth": "1975-03-03T02:12:48.000Z",
        "place_of_birth": "សាមគ្គី សាមគ្គី មុខកំពូល កណ្ដាល",
        "nationality": "Cambodian",
        "phone": "095​ 972 698",
        "email": "chabphalla@gmail.com",
        "current_address": "ស្លក្រាម ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកសេវាសិស្ស\n",
                "key": {
                    "$date": "2022-11-01T02:17:24.393Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T02:16:21.884Z"
        },
        "__v": 0,
        "employee_id": "0008",
        "join_date": {
            "$date": "2015-05-01T02:16:41.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e614748a2abb8c17ff20a1"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79bb"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63608c4882da276b1b9ae84e"
        },
        "national_id": "170967233",
        "khmer_name": {
            "first_name": "វ៉ាន់ ",
            "last_name": "ណារី"
        },
        "latin_name": {
            "first_name": "Van ",
            "last_name": "Nary"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/51e5782f-f779-4146-ad55-93a884319a221052023jpeg.png",
            "name": "51e5782f-f779-4146-ad55-93a884319a221052023jpeg.png"
        },
        "date_of_birth": "1998-12-05T02:59:59.000Z",
        "place_of_birth": "ថ្មី បន្យាយត្រែង ថ្មគោល បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "066 828 007",
        "email": "vannary@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អនុប្រធានផ្នែកការងារទូទៅ\n",
                "key": {
                    "$date": "2022-11-01T03:21:31.119Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T03:02:32.820Z"
        },
        "__v": 0,
        "employee_id": "00103",
        "join_date": {
            "$date": "2017-12-11T03:19:49.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e219b48a2abb8c17fe1984"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79bc"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636091c882da276b1b9ae970"
        },
        "national_id": "180827284",
        "khmer_name": {
            "first_name": "មាស ",
            "last_name": "គឹមលាង"
        },
        "latin_name": {
            "first_name": "Meas ",
            "last_name": "Kimleang"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4ae6b9f2-e5ed-4728-ac11-a53ac5aa98711052023jpeg.png",
            "name": "4ae6b9f2-e5ed-4728-ac11-a53ac5aa98711052023jpeg.png"
        },
        "date_of_birth": "1981-02-01T03:22:44.000Z",
        "place_of_birth": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077 403 439",
        "email": "measkimleang@gmail.com",
        "current_address": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានផ្នែកចុងភៅ\n",
                "key": {
                    "$date": "2022-11-01T03:26:36.756Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T03:26:00.760Z"
        },
        "__v": 0,
        "employee_id": "00466",
        "join_date": {
            "$date": "2022-07-01T03:26:26.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e21a9d8a2abb8c17fe1a49"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79bd"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360933082da276b1b9aea0c"
        },
        "national_id": "180540799",
        "khmer_name": {
            "first_name": "ពៅ ",
            "last_name": "ពេជ"
        },
        "latin_name": {
            "first_name": "Pheou ",
            "last_name": "Pich"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/cbf5b8c2-0352-476f-91df-ac5bd7c470011052023jpeg.png",
            "name": "cbf5b8c2-0352-476f-91df-ac5bd7c470011052023jpeg.png"
        },
        "date_of_birth": "1995-05-07T03:27:42.000Z",
        "place_of_birth": "ដំរីឆ្លង សង្វើយ ជីក្រែង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 976 8967",
        "email": "pheoupich@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អនុប្រធានផ្នែកចុងភៅ\n",
                "key": {
                    "$date": "2022-11-01T03:33:39.370Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T03:32:00.797Z"
        },
        "__v": 0,
        "employee_id": "00288",
        "join_date": {
            "$date": "2019-12-16T03:33:10.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e21b038a2abb8c17fe1aa0"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79be"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360947b82da276b1b9aead2"
        },
        "national_id": "180553489",
        "khmer_name": {
            "first_name": "ឡី ",
            "last_name": "សាលីន"
        },
        "latin_name": {
            "first_name": "Ley ",
            "last_name": "Salin"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/079ef779-2f5c-495f-9643-a75b88e18bca1052023jpeg.png",
            "name": "079ef779-2f5c-495f-9643-a75b88e18bca1052023jpeg.png"
        },
        "date_of_birth": "1996-06-12T03:34:43.000Z",
        "place_of_birth": "ស្វាយ, ខ្នាត, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "089 742 933",
        "email": "leysalin@gmail.com",
        "current_address": "ស្វាយ, ខ្នាត, ពួក, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកផ្នែកអាហារកុមារក្រោម ៦ឆ្នាំ\n",
                "key": {
                    "$date": "2022-11-01T03:40:57.141Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T03:37:31.863Z"
        },
        "__v": 0,
        "employee_id": "00463",
        "join_date": {
            "$date": "2022-06-06T03:39:24.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e21b488a2abb8c17fe1aeb"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79bf"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63609bd982da276b1b9aebe0"
        },
        "national_id": "181050422",
        "khmer_name": {
            "first_name": "កាយ ",
            "last_name": "សុគន់"
        },
        "latin_name": {
            "first_name": "Ky ",
            "last_name": "Sokaon"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/a5bb3f37-2049-42b6-9139-da21ea1767c01122022jpeg.png",
            "name": "a5bb3f37-2049-42b6-9139-da21ea1767c01122022jpeg.png"
        },
        "date_of_birth": "2002-11-01T04:05:39.180Z",
        "place_of_birth": "ដំរីឆ្លង, សង្វើយ, ជីក្រែង, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096​ 858 7174",
        "email": "kysokaon@gmail.com",
        "current_address": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "កូនកាំបិត\n",
                "key": {
                    "$date": "2022-11-01T04:13:11.035Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T04:08:57.591Z"
        },
        "__v": 0,
        "employee_id": "00439",
        "join_date": {
            "$date": "2022-04-01T04:10:22.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e21b938a2abb8c17fe1b3d"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63609e7982da276b1b9aecc6"
        },
        "national_id": "190501241",
        "khmer_name": {
            "first_name": "ហ៊ុន ",
            "last_name": "លីហួ"
        },
        "latin_name": {
            "first_name": "Hun",
            "last_name": " Lyhuo"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ca530318-ce5a-4cd2-80be-5678e4cf1ec81052023jpeg.png",
            "name": "ca530318-ce5a-4cd2-80be-5678e4cf1ec81052023jpeg.png"
        },
        "date_of_birth": "1996-01-01T04:14:44.000Z",
        "place_of_birth": "បន្ទាយមានជ័យ",
        "nationality": "Cambodian",
        "phone": "097 549 4443",
        "email": "hunlyhuo@gmail.com",
        "current_address": "ខ្វៀន, គោកចក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "Bakery\n",
                "key": {
                    "$date": "2022-11-01T04:21:27.043Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T04:20:09.611Z"
        },
        "__v": 0,
        "employee_id": "00480",
        "join_date": {
            "$date": "2022-10-10T04:20:18.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9e10f2b4b8821e89e80d9"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c0"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360a06882da276b1b9aed8d"
        },
        "national_id": "180294139",
        "khmer_name": {
            "first_name": "ជឿម ",
            "last_name": "ហួច"
        },
        "latin_name": {
            "first_name": "Choeum ",
            "last_name": "Huoch"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/d7b3f1bb-c6da-4b67-9b44-52a2c8f804ee1052023jpeg.png",
            "name": "d7b3f1bb-c6da-4b67-9b44-52a2c8f804ee1052023jpeg.png"
        },
        "date_of_birth": "1988-05-12T04:22:12.000Z",
        "place_of_birth": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "069 256 343",
        "email": "choeumhuoch@gmail.com",
        "current_address": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "កូនកាំបិត\n",
                "key": {
                    "$date": "2022-11-01T05:38:34.768Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T04:28:24.672Z"
        },
        "__v": 0,
        "employee_id": "00456",
        "join_date": {
            "$date": "2022-06-01T04:29:08.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e21bd58a2abb8c17fe1b75"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c1"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360b33182da276b1b9aef18"
        },
        "national_id": "180810827",
        "khmer_name": {
            "first_name": "ជឿម ",
            "last_name": "ហាច"
        },
        "latin_name": {
            "first_name": "Choeurm ",
            "last_name": "Hach"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c5b0cde4-ac2c-4e67-bac2-61f3eadfc72d1052023jpeg.png",
            "name": "c5b0cde4-ac2c-4e67-bac2-61f3eadfc72d1052023jpeg.png"
        },
        "date_of_birth": "2000-06-03T05:45:58.000Z",
        "place_of_birth": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 376 711",
        "email": "choeurmhach@gmail.com",
        "current_address": "គោកដូង, ទឹកវិល, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកលាងចាន",
                "key": {
                    "$date": "2022-11-01T05:48:55.975Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T05:48:33.970Z"
        },
        "__v": 0,
        "employee_id": "00468",
        "join_date": {
            "$date": "2022-08-12T05:48:51.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e21c168a2abb8c17fe1ba6"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c2"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360b4a082da276b1b9aef99"
        },
        "national_id": "180943247",
        "khmer_name": {
            "first_name": "ប៉ា ",
            "last_name": "សាម៉ា"
        },
        "latin_name": {
            "first_name": "Pa ",
            "last_name": "Sama"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/02130e84-7837-4630-9609-07939343a8001052023jpeg.png",
            "name": "02130e84-7837-4630-9609-07939343a8001052023jpeg.png"
        },
        "date_of_birth": "2002-03-27T05:52:03.000Z",
        "place_of_birth": "ត្រពាំងត្រែង, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 604 8767",
        "email": "pasama@gmail.com",
        "current_address": "ត្រពាំងត្រែង, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកលាងចាន\n",
                "key": {
                    "$date": "2022-11-01T05:55:00.727Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T05:54:40.589Z"
        },
        "__v": 0,
        "employee_id": "00480",
        "join_date": {
            "$date": "2022-10-12T05:54:57.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9e1832b4b8821e89e815e"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c3"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360b5d282da276b1b9af021"
        },
        "national_id": "180565635",
        "khmer_name": {
            "first_name": " ពេជ្រ​ ",
            "last_name": "សុផល"
        },
        "latin_name": {
            "first_name": "Pich ",
            "last_name": "Sophal"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1fbb2ede-3842-456d-bf42-0d53f4883f6b0542023jpeg.png",
            "name": "1fbb2ede-3842-456d-bf42-0d53f4883f6b0542023jpeg.png"
        },
        "date_of_birth": "1994-11-03T05:56:13.000Z",
        "place_of_birth": "អំពិល, សំរោងយា, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 306 1363",
        "email": "pechsophal7@gmail.com",
        "current_address": "គោកត្នោត, គោកចក, សៀមរាប, សៀមរាប",
        "role": "head",
        "type": "management",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានផ្នែកបសុសត្វ\n",
                "key": {
                    "$date": "2022-11-01T06:00:04.423Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T05:59:46.082Z"
        },
        "__v": 0,
        "employee_id": "00464",
        "join_date": {
            "$date": "2022-06-04T05:59:58.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e217cf8a2abb8c17fe172e"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c4"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360b6fe82da276b1b9af0b1"
        },
        "national_id": "180858521",
        "khmer_name": {
            "first_name": "រឿម ",
            "last_name": "សារៀម"
        },
        "latin_name": {
            "first_name": "Roeurm ",
            "last_name": "Saream"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/73e80c10-1826-4c45-bc35-e01aaad954b91122022jpeg.png",
            "name": "73e80c10-1826-4c45-bc35-e01aaad954b91122022jpeg.png"
        },
        "date_of_birth": "2000-02-24T06:01:01.000Z",
        "place_of_birth": "សំបួរ សំបួរ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088​​ 754 6590",
        "email": "roeurmsaream@gmail.com",
        "current_address": "សំបួរ សំបួរ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកទទួលបន្ទុកមាន់\n",
                "key": {
                    "$date": "2022-11-01T06:05:07.206Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T06:04:46.813Z"
        },
        "__v": 0,
        "employee_id": "00418",
        "join_date": {
            "$date": "2021-12-20T06:05:01.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e218248a2abb8c17fe185f"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c5"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360b9ba82da276b1b9af1c2"
        },
        "national_id": "180920262",
        "khmer_name": {
            "first_name": "វន់ ",
            "last_name": "វស្នា"
        },
        "latin_name": {
            "first_name": "Vaun ",
            "last_name": "Vosna"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/d0bc4f21-5d65-49e6-98d0-e491da1d66181052023jpeg.png",
            "name": "d0bc4f21-5d65-49e6-98d0-e491da1d66181052023jpeg.png"
        },
        "date_of_birth": "2001-03-19T06:08:32.000Z",
        "place_of_birth": "កំភេម កែវពណ៌ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012​ 601​ 495",
        "email": "vosna@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកទទួលការងារទូទៅ\n",
                "key": {
                    "$date": "2022-11-01T06:18:32.910Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T06:16:26.813Z"
        },
        "__v": 0,
        "employee_id": "00356",
        "join_date": {
            "$date": "2020-11-10T06:17:39.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e21a398a2abb8c17fe1a02"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c6"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360bb2582da276b1b9af25f"
        },
        "national_id": "190460051",
        "khmer_name": {
            "first_name": "លឹម ",
            "last_name": "គឹមហួត"
        },
        "latin_name": {
            "first_name": "Lim ",
            "last_name": "Kimhout"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e52c0680-3132-4f7d-ad48-09ad794794671122022jpeg.png",
            "name": "e52c0680-3132-4f7d-ad48-09ad794794671122022jpeg.png"
        },
        "date_of_birth": "2022-11-01T06:19:25.428Z",
        "place_of_birth": "បន្ទាយចាស់ ស្លក្រាម សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077 770 779",
        "email": "limkimhuotkh@gmail.com",
        "current_address": "បន្ទាយចាស់ ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកទទួលការងារទូទៅ\n",
                "key": {
                    "$date": "2022-11-01T06:27:26.245Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T06:22:29.904Z"
        },
        "__v": 0,
        "employee_id": "00291",
        "join_date": {
            "$date": "2020-01-01T06:27:22.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e218a48a2abb8c17fe18e7"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360bdfb82da276b1b9af369"
        },
        "national_id": "62208877",
        "khmer_name": {
            "first_name": "ឈាង ",
            "last_name": "តៃហ័រ"
        },
        "latin_name": {
            "first_name": "Chheang ",
            "last_name": "Taihor "
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9ba8c4e2-cf7d-4267-bd2f-11df721392d31052023jpeg.png",
            "name": "9ba8c4e2-cf7d-4267-bd2f-11df721392d31052023jpeg.png"
        },
        "date_of_birth": "2001-02-02T06:30:38.000Z",
        "place_of_birth": "កំពង់ចាម",
        "nationality": "Cambodian",
        "phone": "096 431 9825",
        "email": "chheangtaihor@gmail.com",
        "current_address": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកទទួលការងារទូទៅ\n",
                "key": {
                    "$date": "2022-11-01T06:35:18.270Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T06:34:35.973Z"
        },
        "__v": 0,
        "employee_id": "00449",
        "join_date": {
            "$date": "2022-03-12T06:34:51.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e218fc8a2abb8c17fe1931"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c7"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360c07b82da276b1b9af47a"
        },
        "national_id": "181017917",
        "khmer_name": {
            "first_name": "លូវ ",
            "last_name": "ស្រីនី"
        },
        "latin_name": {
            "first_name": "Lov ",
            "last_name": "Sreyny"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/a3318bc0-c83e-45ba-8073-0d27549ced811242022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1999-05-05T06:38:14.000Z",
        "place_of_birth": "ស្វាយ​ សសរស្ដម្ភ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 431 9825",
        "email": "lovsreyny@gmail.com",
        "current_address": "ស្វាយ​ សសរស្ដម្ភ ពួក សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T06:45:15.323Z"
        },
        "__v": 0,
        "employee_id": "00484",
        "join_date": {
            "$date": "2022-11-06T07:21:31.666Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9e20d2b4b8821e89e827f"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360c38a82da276b1b9af62c"
        },
        "national_id": "180739419",
        "khmer_name": {
            "first_name": "យឿម ",
            "last_name": "ចំប៉ី"
        },
        "latin_name": {
            "first_name": "Youem ",
            "last_name": "Champey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/eb762729-2c63-41f4-949c-5a57cb1cacbf1052023jpeg.png",
            "name": "eb762729-2c63-41f4-949c-5a57cb1cacbf1052023jpeg.png"
        },
        "date_of_birth": "1993-05-19T06:46:09.000Z",
        "place_of_birth": "វត្តស្វាយ សាលាកំរើក សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "016 943 481",
        "email": "champey275@gmail.com",
        "current_address": "វត្តស្វាយ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T06:58:18.898Z"
        },
        "__v": 0,
        "contract": null,
        "working_status": "working",
        "employee_id": "00191",
        "join_date": {
            "$date": "2023-05-16T02:41:59.451Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c8"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360c47a82da276b1b9af6b0"
        },
        "national_id": "180800170",
        "khmer_name": {
            "first_name": "ណៃ ",
            "last_name": "ស៊ាន "
        },
        "latin_name": {
            "first_name": "Nai ",
            "last_name": "Sean"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/70065f9e-760d-4287-ae2f-34e70ee151f31052023jpeg.png",
            "name": "70065f9e-760d-4287-ae2f-34e70ee151f31052023jpeg.png"
        },
        "date_of_birth": "1999-04-04T06:59:54.000Z",
        "place_of_birth": "ស្វាយ, ត្រីញ័រ, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "016 307 698",
        "email": "naisean4499@gmail.com",
        "current_address": "បឹងដូនប៉ា, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "head",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានផ្នែករដ្ឋបាលសិក្សា\n",
                "key": {
                    "$date": "2022-11-01T07:03:01.613Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T07:02:18.839Z"
        },
        "__v": 0,
        "employee_id": "00221",
        "join_date": {
            "$date": "2019-07-01T07:02:29.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e1ffe78a2abb8c17fe0151"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79c9"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360c5cb82da276b1b9af734"
        },
        "national_id": "180598423",
        "khmer_name": {
            "first_name": "រុំ ",
            "last_name": "រិទ្ធី"
        },
        "latin_name": {
            "first_name": "Rom ",
            "last_name": "Retty"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/bc9dfa28-f235-4cc2-8320-7381040ddd331052023jpeg.png",
            "name": "bc9dfa28-f235-4cc2-8320-7381040ddd331052023jpeg.png"
        },
        "date_of_birth": "1999-04-04T07:04:44.000Z",
        "place_of_birth": "ត្រពាំងព្រីង ត្រីញ័រ ពួក សៀមរាប ",
        "nationality": "Cambodian",
        "phone": "097 690 18 63",
        "email": "romretty@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកទទួលបន្ទុកបញ្ជីឈ្មោះសិស្ស\n",
                "key": {
                    "$date": "2022-11-01T07:09:31.376Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T07:07:55.297Z"
        },
        "__v": 0,
        "employee_id": "00215",
        "join_date": {
            "$date": "2019-06-03T07:08:05.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e200c98a2abb8c17fe01b1"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ca"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360c71182da276b1b9af7ac"
        },
        "national_id": "180556521",
        "khmer_name": {
            "first_name": "ខ្វែក ",
            "last_name": "សំខាន់"
        },
        "latin_name": {
            "first_name": "Khvek ",
            "last_name": "Samkhann"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/a6000da3-e5a9-4a8d-ae93-ecbe3b4d929d1052023jpeg.png",
            "name": "a6000da3-e5a9-4a8d-ae93-ecbe3b4d929d1052023jpeg.png"
        },
        "date_of_birth": "1995-08-09T07:10:53.000Z",
        "place_of_birth": "ល្វា ល្វា ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "070 484 522",
        "email": "khveksamkhann@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកបង្កើតមាតិកា\n",
                "key": {
                    "$date": "2022-11-01T07:15:56.408Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T07:13:21.119Z"
        },
        "__v": 0,
        "employee_id": "00298",
        "join_date": {
            "$date": "2020-01-15T07:14:48.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e201fe8a2abb8c17fe022a"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79cb"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360c8cf82da276b1b9af88c"
        },
        "national_id": "180951649",
        "khmer_name": {
            "first_name": "ហាក់​ ",
            "last_name": "យ៉ាន"
        },
        "latin_name": {
            "first_name": "Hak  ",
            "last_name": "Yan"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/94998815-c82d-4dd1-9071-48019831ea7f1052023jpeg.png",
            "name": "94998815-c82d-4dd1-9071-48019831ea7f1052023jpeg.png"
        },
        "date_of_birth": "2001-12-05T07:17:48.000Z",
        "place_of_birth": "ភូនស្វាយចន្ទោរ ព្រៃជ្រូក ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "086 238 069",
        "email": "hakyan@gmail.com",
        "current_address": "វត្តដំណាក់ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School\n",
                "company": "សារពើភ័ណ្ឌ\n",
                "key": {
                    "$date": "2022-11-01T07:21:20.411Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T07:20:47.960Z"
        },
        "__v": 0,
        "employee_id": "00447",
        "join_date": {
            "$date": "2022-05-01T07:20:56.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e202888a2abb8c17fe02ab"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79cc"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360cc0b82da276b1b9af9ac"
        },
        "national_id": "181029700",
        "khmer_name": {
            "first_name": "លឿង ",
            "last_name": "ពន្លឺពេជ្រ"
        },
        "latin_name": {
            "first_name": "Loeung ",
            "last_name": "Ponleupich"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b47f5f69-e9a8-49c3-a588-133bd2d5f0d31052023jpeg.png",
            "name": "b47f5f69-e9a8-49c3-a588-133bd2d5f0d31052023jpeg.png"
        },
        "date_of_birth": "2003-07-24T07:25:11.000Z",
        "place_of_birth": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "093 556 815",
        "email": "loeungponleupich@gmail.com",
        "current_address": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ជំនួយការសិក្សាធិការ\n",
                "key": {
                    "$date": "2022-11-01T07:59:33.370Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T07:34:35.107Z"
        },
        "__v": 0,
        "employee_id": "00440",
        "join_date": {
            "$date": "2022-04-03T07:57:21.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e1fdd68a2abb8c17fe001b"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79cd"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360d38882da276b1b9afaec"
        },
        "national_id": "180500506",
        "khmer_name": {
            "first_name": "លឿង ",
            "last_name": "រតនា"
        },
        "latin_name": {
            "first_name": "Loueng ",
            "last_name": "Ratana"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/79fc28df-7180-4ef6-85e9-4c0db37a69331122022jpeg.png",
            "name": "79fc28df-7180-4ef6-85e9-4c0db37a69331122022jpeg.png"
        },
        "date_of_birth": "1996-09-08T08:00:20.000Z",
        "place_of_birth": "ទឹកលិច បិងមាលា ស្វាយលើ សៀមរាប",
        "nationality": "Cambodian",
        "phone": " 095 30 11 90",
        "email": "rouengratana@gmail.com",
        "current_address": "វិហារចិន ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-01T08:17:08.236Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:06:32.091Z"
        },
        "__v": 0,
        "employee_id": "00280",
        "join_date": {
            "$date": "2019-12-02T08:16:15.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360d6dd82da276b1b9afc3a"
        },
        "national_id": "180987416",
        "khmer_name": {
            "first_name": "តី ",
            "last_name": "ចរិយា"
        },
        "latin_name": {
            "first_name": "Tey ",
            "last_name": "Chakriya"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/d9252260-2537-408a-bd94-9f5ce6e727191052023jpeg.png",
            "name": "d9252260-2537-408a-bd94-9f5ce6e727191052023jpeg.png"
        },
        "date_of_birth": "2001-03-09T08:18:17.000Z",
        "place_of_birth": "ទម្លាប់ រួសរាន់ រវៀង ព្រះវិហារ",
        "nationality": "Cambodian",
        "phone": "012 828 049",
        "email": "teychakriya19@gmail.com",
        "current_address": "សាលាកំរើក សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-01T08:21:02.287Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:20:45.436Z"
        },
        "__v": 0,
        "employee_id": "00417",
        "join_date": {
            "$date": "2021-12-20T08:20:56.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e215328a2abb8c17fe13b7"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ce"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360d84782da276b1b9afd11"
        },
        "national_id": "180934349",
        "khmer_name": {
            "first_name": "អឿម ",
            "last_name": "ស្រីណឺ"
        },
        "latin_name": {
            "first_name": "Oeurm ",
            "last_name": "Sreyneu"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e4c5b7c3-ecc3-4141-9c48-c73395313fce1122022jpeg.png",
            "name": "e4c5b7c3-ecc3-4141-9c48-c73395313fce1122022jpeg.png"
        },
        "date_of_birth": "2002-06-25T08:22:40.000Z",
        "place_of_birth": "គោកក្តុល កំពងភ្លុក ប្រសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "092 185 556",
        "email": "oeurmsreyneu@gmail.com",
        "current_address": "បឹងដូនប៉ា ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-01T08:28:15.034Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:26:47.031Z"
        },
        "__v": 0,
        "employee_id": "00446",
        "join_date": {
            "$date": "2022-04-24T08:26:58.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e20eeb8a2abb8c17fe0bd0"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360da3382da276b1b9afe98"
        },
        "national_id": "21137440",
        "khmer_name": {
            "first_name": "ឈឺន    ",
            "last_name": "មុយគា "
        },
        "latin_name": {
            "first_name": "Chheun ",
            "last_name": "Muykea"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/722aed09-6309-47eb-b485-409a356b194b1052023jpeg.png",
            "name": "722aed09-6309-47eb-b485-409a356b194b1052023jpeg.png"
        },
        "date_of_birth": "1999-10-07T08:29:22.000Z",
        "place_of_birth": "លេខ៣ ស្វាយរលំ ស្អាង កណ្តាល ",
        "nationality": "Cambodian",
        "phone": "081 518 721",
        "email": "chheunmuykea@gmail.com",
        "current_address": "វិហារចិន  ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានផ្នែកមត្តេយ្យសិក្សាភាសារអង់គ្លេស\n",
                "key": {
                    "$date": "2022-11-01T08:36:39.860Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:34:59.216Z"
        },
        "__v": 0,
        "employee_id": "00061",
        "join_date": {
            "$date": "2017-05-02T08:35:46.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e203358a2abb8c17fe0321"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79cf"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360dbcc82da276b1b9b002c"
        },
        "national_id": "200138998",
        "khmer_name": {
            "first_name": "ប៊ុន ",
            "last_name": "ពិសី"
        },
        "latin_name": {
            "first_name": "Bon ",
            "last_name": "Pisey"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/de57ae98-8416-4f0a-bcde-17a58aae91281052023jpeg.png",
            "name": "de57ae98-8416-4f0a-bcde-17a58aae91281052023jpeg.png"
        },
        "date_of_birth": "1996-03-09T08:38:23.000Z",
        "place_of_birth": "អំពិល បន្ទាយអំពិល ឧ.ត",
        "nationality": "Cambodian",
        "phone": "096 545 6872",
        "email": "bunpisey@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកផ្នែកមត្តេយ្យសិក្សាភាសារអង់គ្លេស\n",
                "key": {
                    "$date": "2022-11-01T08:42:09.096Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:41:48.421Z"
        },
        "__v": 0,
        "employee_id": "00183",
        "join_date": {
            "$date": "2018-12-01T08:42:03.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e203b78a2abb8c17fe0372"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d0"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360dd7882da276b1b9b01d0"
        },
        "national_id": "180500526",
        "khmer_name": {
            "first_name": "វីន",
            "last_name": " វ័យ"
        },
        "latin_name": {
            "first_name": "Win ",
            "last_name": "Vai"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/fdb79c9d-0e27-4755-b86d-0622375b4e4c1052023jpeg.png",
            "name": "fdb79c9d-0e27-4755-b86d-0622375b4e4c1052023jpeg.png"
        },
        "date_of_birth": "1992-04-06T08:44:21.000Z",
        "place_of_birth": "ពពេល សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "069​ 251 192",
        "email": "nawinvai@gmail.com",
        "current_address": "ដំណាក់ សាលាកំរើក សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានផ្នែកចំណេះទូទៅភាសាអង់គ្លេស\n",
                "key": {
                    "$date": "2022-11-01T08:51:02.071Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:48:56.739Z"
        },
        "__v": 0,
        "employee_id": "00208",
        "join_date": {
            "$date": "2019-03-16T08:49:47.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e204498a2abb8c17fe03f8"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d1"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360de9282da276b1b9b02f5"
        },
        "national_id": "180809924",
        "khmer_name": {
            "first_name": "រិន ",
            "last_name": "រ៉ូ"
        },
        "latin_name": {
            "first_name": "Rin ",
            "last_name": "Ro"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0d57a158-fddd-48ca-b1ac-6c23f277faa61122022jpeg.png",
            "name": "0d57a158-fddd-48ca-b1ac-6c23f277faa61122022jpeg.png"
        },
        "date_of_birth": "1995-09-07T08:51:40.000Z",
        "place_of_birth": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "016​ 811 476",
        "email": "rorinro@gmail.com",
        "current_address": "ស្វាយដង្គំ, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-01T08:54:27.160Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:53:38.234Z"
        },
        "__v": 0,
        "employee_id": "00452",
        "join_date": {
            "$date": "2022-05-20T08:53:53.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6360df8b82da276b1b9b0400"
        },
        "national_id": "180712348",
        "khmer_name": {
            "first_name": "តឿម ",
            "last_name": "ទិវ"
        },
        "latin_name": {
            "first_name": "Toeurm ",
            "last_name": "Tiv"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f38f74a7-4a9b-416a-baa7-a654f7760f941122022jpeg.png",
            "name": "f38f74a7-4a9b-416a-baa7-a654f7760f941122022jpeg.png"
        },
        "date_of_birth": "1999-03-19T08:55:02.000Z",
        "place_of_birth": "ថ្នល់បណ្តោយ  ព្រះដាក់ បន្ទាយស្រី",
        "nationality": "Cambodian",
        "phone": " 085713789",
        "email": "toeurmtiv@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-01T08:58:47.535Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T08:57:47.653Z"
        },
        "__v": 0,
        "employee_id": "00350",
        "join_date": {
            "$date": "2020-11-10T08:58:13.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e204b38a2abb8c17fe0431"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d2"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360e0ca82da276b1b9b054d"
        },
        "national_id": "180878189",
        "khmer_name": {
            "first_name": "គឹម ",
            "last_name": "មុនីរតនា"
        },
        "latin_name": {
            "first_name": "Kim ",
            "last_name": "Monyrothana"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b153aaed-9414-47f0-a5bf-7b79534d9ff11052023jpeg.png",
            "name": "b153aaed-9414-47f0-a5bf-7b79534d9ff11052023jpeg.png"
        },
        "date_of_birth": "2001-01-22T08:59:09.000Z",
        "place_of_birth": "សំរោង សំរោង សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077​​ 525 854",
        "email": "kimmonyrothana@gmail.com",
        "current_address": "ល្អក់ កណ្តែង ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "management",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានការរិយាល័យកម្មវិធីភាសាខ្មែរ\n",
                "key": {
                    "$date": "2022-11-01T09:04:18.204Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T09:03:06.670Z"
        },
        "__v": 0,
        "employee_id": "00373",
        "join_date": {
            "$date": "2021-02-01T09:03:21.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e2053c8a2abb8c17fe049b"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d3"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6360e4d182da276b1b9b07be"
        },
        "national_id": "180793234",
        "khmer_name": {
            "first_name": "ពេជ្រ ",
            "last_name": "រស្មី"
        },
        "latin_name": {
            "first_name": "Pich ",
            "last_name": "Reaksmey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/23e8187f-a586-4d4d-9176-5de86b411aae1132022jpeg.png",
            "name": "23e8187f-a586-4d4d-9176-5de86b411aae1132022jpeg.png"
        },
        "date_of_birth": "2000-03-25T09:16:11.000Z",
        "place_of_birth": "អូតាប្រាក់ ពួក  ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 601 892",
        "email": "sisterreaksmeyblack@gmail.com",
        "current_address": "អូតាប្រាក់ ពួក  ពួក សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "ប្រធានផ្នែកបឋមសិក្សាចំណេះទូទៅ\n",
                "key": {
                    "$date": "2022-11-02T00:16:17.331Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-01T09:20:17.427Z"
        },
        "__v": 0,
        "employee_id": "00334",
        "join_date": {
            "$date": "2020-11-02T00:16:03.149Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361b7ba82da276b1b9b0c4c"
        },
        "national_id": "180856271",
        "khmer_name": {
            "first_name": "ឡៅ ",
            "last_name": "ស្រីម៉ុច "
        },
        "latin_name": {
            "first_name": "Lao ",
            "last_name": "Sreymoch"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/302f22bc-0beb-417e-8591-b13c34563e6b1052023jpeg.png",
            "name": "302f22bc-0beb-417e-8591-b13c34563e6b1052023jpeg.png"
        },
        "date_of_birth": "2000-10-14T00:18:14.000Z",
        "place_of_birth": "បន្ទាយចាស់, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "061​ 982 603",
        "email": "sreymoch322@gmail.com",
        "current_address": "បន្ទាយចាស់, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "",
                "company": "ប្រធានផ្នែកមធ្យមសិក្សាចំណេះទូទៅ\n",
                "key": {
                    "$date": "2022-11-02T00:20:56.162Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T00:20:10.570Z"
        },
        "__v": 0,
        "employee_id": "00451",
        "join_date": {
            "$date": "2022-05-09T00:20:32.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e20e4d8a2abb8c17fe0b35"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d4"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6361ba4282da276b1b9b0d58"
        },
        "national_id": "180572563",
        "khmer_name": {
            "first_name": "រ៉ុម ",
            "last_name": "ស្រីរ័ត្ន"
        },
        "latin_name": {
            "first_name": "Rom ",
            "last_name": "Sreyrath"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/a7355b08-0042-44b0-a5e3-630964df16a21132022jpeg.png",
            "name": "a7355b08-0042-44b0-a5e3-630964df16a21132022jpeg.png"
        },
        "date_of_birth": "1996-09-04T00:22:00.000Z",
        "place_of_birth": "ទឹកលិច, បឹងមាលា, ស្វាយលើ, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 489 5606",
        "email": "romsreyrath@gmail.com",
        "current_address": "វិហារចិន, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T00:31:48.773Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T00:30:58.778Z"
        },
        "__v": 0,
        "employee_id": "00279",
        "join_date": {
            "$date": "2019-12-02T00:31:12.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361bb9182da276b1b9b0de9"
        },
        "national_id": "190721020",
        "khmer_name": {
            "first_name": "អឿ ",
            "last_name": "ថូណា"
        },
        "latin_name": {
            "first_name": "Oeu ",
            "last_name": "Thona"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c4bdfed1-6cd6-42aa-9e28-b989941d6f7f1132022jpeg.png",
            "name": "c4bdfed1-6cd6-42aa-9e28-b989941d6f7f1132022jpeg.png"
        },
        "date_of_birth": "2000-01-01T00:32:48.000Z",
        "place_of_birth": "ប៉ោយក្ត្រឿង ព្រះនេត្រ បន្ទាយមានជ័យ",
        "nationality": "Cambodian",
        "phone": "096 8217 884",
        "email": "oeuthona@gmail.com",
        "current_address": "វត្តដំណាក់ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T00:37:01.447Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T00:36:33.441Z"
        },
        "__v": 0,
        "employee_id": "00161",
        "join_date": {
            "$date": "2018-10-18T00:36:48.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361bcfb82da276b1b9b0e78"
        },
        "national_id": "180627020",
        "khmer_name": {
            "first_name": "ស៊ាម ",
            "last_name": "វិសាល "
        },
        "latin_name": {
            "first_name": "Sheam ",
            "last_name": "Visal"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0b04b634-e28e-4daa-925f-ab9d5a8225df1132022jpeg.png",
            "name": "0b04b634-e28e-4daa-925f-ab9d5a8225df1132022jpeg.png"
        },
        "date_of_birth": "1998-07-26T00:39:35.000Z",
        "place_of_birth": "សួង ត្បូងឃ្មុំ កំពង់ចាម ",
        "nationality": "Cambodian",
        "phone": "011 644 094",
        "email": "sheamvisal@gmail.com",
        "current_address": "តាគង់ សំបួរ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T00:44:23.196Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T00:42:35.421Z"
        },
        "__v": 0,
        "employee_id": "00185",
        "join_date": {
            "$date": "2017-03-15T00:42:55.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e20faf8a2abb8c17fe0c91"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361bfbb82da276b1b9b0f8a"
        },
        "national_id": "180906017",
        "khmer_name": {
            "first_name": "ជើម ",
            "last_name": "ប៉ិច"
        },
        "latin_name": {
            "first_name": "Cherm ",
            "last_name": "Pich"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c16d5ffa-35a1-48db-bae8-cbcb8d5a1edb1052023jpeg.png",
            "name": "c16d5ffa-35a1-48db-bae8-cbcb8d5a1edb1052023jpeg.png"
        },
        "date_of_birth": "2001-07-01T00:45:44.000Z",
        "place_of_birth": "កញ្ជូរ រលួស ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 841 5657",
        "email": "chermpich@gmail.com",
        "current_address": "កញ្ជូរ រលួស ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T01:00:21.100Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T00:54:19.214Z"
        },
        "__v": 0,
        "employee_id": "00281",
        "join_date": {
            "$date": "2019-12-02T01:00:17.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e2103d8a2abb8c17fe0d1f"
        },
        "working_status": "resign",
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "6361c30082da276b1b9b104e"
        },
        "national_id": "1808878105",
        "khmer_name": {
            "first_name": "មុត​ ",
            "last_name": "សារ៉េន"
        },
        "latin_name": {
            "first_name": "Mut ",
            "last_name": "Saren"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e2c494a3-c014-4dc6-96b7-2c882fa4d34e1132022jpeg.png",
            "name": "e2c494a3-c014-4dc6-96b7-2c882fa4d34e1132022jpeg.png"
        },
        "date_of_birth": "1993-08-05T01:04:36.000Z",
        "place_of_birth": "ពោធិបុស្ស ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "098 802 793",
        "email": "mutsaren@gmial.com",
        "current_address": "ពោធិបុស្ស ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T01:08:47.748Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T01:08:16.413Z"
        },
        "__v": 0,
        "employee_id": "00233",
        "join_date": {
            "$date": "2018-09-06T01:08:26.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361c65682da276b1b9b11a5"
        },
        "national_id": "180922361",
        "khmer_name": {
            "first_name": "ភាន់ ",
            "last_name": "ណាត"
        },
        "latin_name": {
            "first_name": "Phoan ",
            "last_name": "Nat"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ac460b07-b872-46c7-89e5-4f1545c46e1f1132022jpeg.png",
            "name": "ac460b07-b872-46c7-89e5-4f1545c46e1f1132022jpeg.png"
        },
        "date_of_birth": "2001-05-05T01:14:59.000Z",
        "place_of_birth": "ខ្នារ ក្របីរៀល សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "061 504 655",
        "email": "phoannat@gmail.com",
        "current_address": "ខ្នារ ក្របីរៀល សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global Schoool",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T01:24:30.710Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T01:22:30.836Z"
        },
        "__v": 0,
        "employee_id": "00307",
        "join_date": {
            "$date": "2020-02-17T01:22:46.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e213948a2abb8c17fe121a"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361c7b782da276b1b9b122e"
        },
        "national_id": "180909158",
        "khmer_name": {
            "first_name": "ង៉ិក ",
            "last_name": "ស្រីហ៊ីង"
        },
        "latin_name": {
            "first_name": "Ngek ",
            "last_name": "Sreyhing"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4df51c90-d0a9-49db-94cc-9e434ef22ecd1132022jpeg.png",
            "name": "4df51c90-d0a9-49db-94cc-9e434ef22ecd1132022jpeg.png"
        },
        "date_of_birth": "2001-04-14T01:26:10.000Z",
        "place_of_birth": "ជ័យ ទឹកវិល ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096​ 9598 978 ",
        "email": "ngeksreyhing@gmail.com",
        "current_address": "ជ័យ ទឹកវិល ពួក សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T01:29:26.800Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T01:28:23.896Z"
        },
        "__v": 0,
        "employee_id": "00351",
        "join_date": {
            "$date": "2020-11-10T01:28:51.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e213f08a2abb8c17fe1297"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361c8dc82da276b1b9b12c0"
        },
        "national_id": "180896671",
        "khmer_name": {
            "first_name": "ឈុប ",
            "last_name": "វីឆៃ"
        },
        "latin_name": {
            "first_name": "Chhub ",
            "last_name": "Vechhai"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7e6cee33-15d1-4cc8-a272-c6cddbd5562e1132022jpeg.png",
            "name": "7e6cee33-15d1-4cc8-a272-c6cddbd5562e1132022jpeg.png"
        },
        "date_of_birth": "2000-02-08T01:30:33.000Z",
        "place_of_birth": "ថ្នល់ត្រង់ បាគង ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "092 258 567",
        "email": "Vechaichhub052@gamil.com",
        "current_address": "ថ្នល់ត្រង់ បាគង ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T01:34:03.727Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T01:33:16.741Z"
        },
        "__v": 0,
        "employee_id": "00358",
        "join_date": {
            "$date": "2020-11-10T01:33:48.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361c9df82da276b1b9b133a"
        },
        "national_id": "180932951",
        "khmer_name": {
            "first_name": "ភឿន ",
            "last_name": "រក្សា"
        },
        "latin_name": {
            "first_name": "Poeurn ",
            "last_name": "Reaksa"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/8d396c9d-55aa-400e-ad66-4a1849d605dd1132022jpeg.png",
            "name": "8d396c9d-55aa-400e-ad66-4a1849d605dd1132022jpeg.png"
        },
        "date_of_birth": "2002-03-11T01:35:10.000Z",
        "place_of_birth": "ជប់ ខ្នារពោធិ៍ សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "095 7086 521",
        "email": "reaksareaksa766@gmail.com",
        "current_address": "ជប់ ខ្នារពោធិ៍ សូទ្រនិគម សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T01:39:04.953Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T01:37:35.743Z"
        },
        "__v": 0,
        "employee_id": "00294",
        "join_date": {
            "$date": "2020-01-04T01:38:28.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e214788a2abb8c17fe131b"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361d15782da276b1b9b1487"
        },
        "national_id": "180939923",
        "khmer_name": {
            "first_name": "រី ",
            "last_name": "ហង់"
        },
        "latin_name": {
            "first_name": "Rey ",
            "last_name": "Horng "
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b96f626e-0e46-457b-9112-3ac6ee6dddff1132022jpeg.png",
            "name": "b96f626e-0e46-457b-9112-3ac6ee6dddff1132022jpeg.png"
        },
        "date_of_birth": "2001-12-01T02:01:10.000Z",
        "place_of_birth": "ស្វាយចន្ទរ, ព្រៃជ្រូក, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097​ 375 7652",
        "email": "reyhorng@gmail.com",
        "current_address": "ស្វាយចន្ទរ, ព្រៃជ្រូក, ពួក, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T02:10:25.048Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T02:09:27.095Z"
        },
        "__v": 0,
        "employee_id": "00448",
        "join_date": {
            "$date": "2022-05-02T02:09:42.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361d73682da276b1b9b159f"
        },
        "national_id": "190877284",
        "khmer_name": {
            "first_name": "អេង ",
            "last_name": "ម៉ូនីម៉ា"
        },
        "latin_name": {
            "first_name": "Eng ",
            "last_name": "Monima"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/05ff52b1-0dd4-4113-967e-a6ad80818cc71132022jpeg.png",
            "name": "05ff52b1-0dd4-4113-967e-a6ad80818cc71132022jpeg.png"
        },
        "date_of_birth": "2001-11-10T02:31:25.000Z",
        "place_of_birth": "បន្ទាយមានជ័យ",
        "nationality": "Cambodian",
        "phone": "096 262 3899",
        "email": "engmonima@gmail.com",
        "current_address": "ដកពោធិ៍, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T02:34:50.032Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T02:34:31.003Z"
        },
        "__v": 0,
        "employee_id": "00460",
        "join_date": {
            "$date": "2022-06-01T02:34:45.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361d82882da276b1b9b161a"
        },
        "national_id": "190938178",
        "khmer_name": {
            "first_name": "ទិប ",
            "last_name": "វ៉ាន់ស៊ី"
        },
        "latin_name": {
            "first_name": "Tip ",
            "last_name": "Vannsy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/2002473d-43bf-4fe8-afd9-619dc474409d1132022jpeg.png",
            "name": "2002473d-43bf-4fe8-afd9-619dc474409d1132022jpeg.png"
        },
        "date_of_birth": "2004-01-01T02:36:08.000Z",
        "place_of_birth": "បន្ទាយមានជ័យ",
        "nationality": "Cambodian",
        "phone": "088 786 7060",
        "email": "davidseth0812@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "គ្រូជំនួយ\n",
                "key": {
                    "$date": "2022-11-02T02:41:49.949Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T02:38:32.196Z"
        },
        "__v": 0,
        "employee_id": "00461",
        "join_date": {
            "$date": "2022-06-01T02:38:54.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361da6482da276b1b9b16c1"
        },
        "national_id": "1806279641",
        "khmer_name": {
            "first_name": "ស៊ន់",
            "last_name": "សុភ័ក្ត្រ"
        },
        "latin_name": {
            "first_name": "Son ",
            "last_name": "Sopheak"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0eef3b28-c400-42a4-bd11-6514151ee3471052023jpeg.png",
            "name": "0eef3b28-c400-42a4-bd11-6514151ee3471052023jpeg.png"
        },
        "date_of_birth": "1993-12-02T02:45:02.000Z",
        "place_of_birth": "ត្រពាំងថ្នល់, កន្ទ្រាំង, ប្រាសាទបាគង, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 600 3148",
        "email": "sonsopheak@gmail.com",
        "current_address": "ត្រពាំងថ្នល់, កន្ទ្រាំង, ប្រាសាទបាគង, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកថែទាំកុមារ\n",
                "key": {
                    "$date": "2022-11-02T02:49:03.894Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T02:48:04.262Z"
        },
        "__v": 0,
        "employee_id": "0006",
        "join_date": {
            "$date": "2015-03-23T02:48:25.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e215878a2abb8c17fe141e"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d5"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6361db9482da276b1b9b174b"
        },
        "national_id": "100251504",
        "khmer_name": {
            "first_name": "ឡុង ",
            "last_name": "សារ៉េត"
        },
        "latin_name": {
            "first_name": "Long ",
            "last_name": "Saret"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/2ca8b24e-a876-46fb-a38f-fc6425cbf3fb1102022jpg.png",
            "name": "2ca8b24e-a876-46fb-a38f-fc6425cbf3fb1102022jpg.png"
        },
        "date_of_birth": "1988-12-12T02:50:27.000Z",
        "place_of_birth": "តាកែវ",
        "nationality": "Cambodian",
        "phone": "061 848 333",
        "email": "longsaret@gmail.com",
        "current_address": "មណ្ឌល៣, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកថែទាំកុមារ\n",
                "key": {
                    "$date": "2022-11-02T02:54:04.353Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T02:53:08.400Z"
        },
        "__v": 0,
        "employee_id": "00010",
        "join_date": {
            "$date": "2015-08-01T02:53:26.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361dcbd82da276b1b9b17c5"
        },
        "national_id": "1803628167",
        "khmer_name": {
            "first_name": "សែស             ",
            "last_name": "ក្រហម"
        },
        "latin_name": {
            "first_name": "Ses ",
            "last_name": "Karham"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/6bae018b-6ca8-460e-90ac-e8e5329f29c41052023jpeg.png",
            "name": "6bae018b-6ca8-460e-90ac-e8e5329f29c41052023jpeg.png"
        },
        "date_of_birth": "1988-12-12T02:55:51.000Z",
        "place_of_birth": "អន្លង់វិល គោកធ្លកក្រោម ជីក្រែង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 405 469 ",
        "email": "seskarham@gmail.com",
        "current_address": "មណ្ឌល៣ ស្លរក្រាម  សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "បុគ្គលិកគាំពារ និងអភិវឌ្ឍ\n",
                "key": {
                    "$date": "2022-11-02T02:58:16.510Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T02:58:05.525Z"
        },
        "__v": 0,
        "employee_id": "00041",
        "join_date": {
            "$date": "2016-11-01T02:58:14.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e215ca8a2abb8c17fe1494"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d6"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6361ddfe82da276b1b9b1857"
        },
        "national_id": "180977310",
        "khmer_name": {
            "first_name": "ហឿល ",
            "last_name": "ស្រីមុំ"
        },
        "latin_name": {
            "first_name": "Huel ",
            "last_name": "Sreymom"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c74b576d-0093-48a4-ab5a-9397c22ca26b1052023jpeg.png",
            "name": "c74b576d-0093-48a4-ab5a-9397c22ca26b1052023jpeg.png"
        },
        "date_of_birth": "2003-03-09T03:00:56.000Z",
        "place_of_birth": "កន្ត្រក, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 977 8916",
        "email": "huelsreymom@gmail.com",
        "current_address": "កន្ត្រក, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global Scool",
                "company": "អ្នកថែទាំកុមារ\n",
                "key": {
                    "$date": "2022-11-02T03:04:09.912Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T03:03:26.059Z"
        },
        "__v": 0,
        "employee_id": "00467",
        "join_date": {
            "$date": "2022-07-19T03:03:33.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e216af8a2abb8c17fe1582"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d7"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6361df0382da276b1b9b18ce"
        },
        "national_id": "180769341",
        "khmer_name": {
            "first_name": "ស៊ី ",
            "last_name": "ស្រីអយ"
        },
        "latin_name": {
            "first_name": "Sy ",
            "last_name": "Sreyoy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/74d02073-0bc9-4173-8551-8727340766841132022jpeg.png",
            "name": "74d02073-0bc9-4173-8551-8727340766841132022jpeg.png"
        },
        "date_of_birth": "1998-07-08T03:05:23.000Z",
        "place_of_birth": "ថ្នល់ចែក, សំរោង, សូទ្រនិគម, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "086 529 004",
        "email": "sysreyoy@gmail.com",
        "current_address": "ថ្នល់ចែក, សំរោង, សូទ្រនិគម, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "អ្នកថែទាំកុមារ\n",
                "key": {
                    "$date": "2022-11-02T03:08:55.440Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T03:07:47.601Z"
        },
        "__v": 0,
        "employee_id": "00471",
        "join_date": {
            "$date": "2022-09-05T03:08:19.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e217438a2abb8c17fe1603"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6361e09282da276b1b9b196b"
        },
        "national_id": "1806279642",
        "khmer_name": {
            "first_name": "សឿម ",
            "last_name": "សុទ្ធ"
        },
        "latin_name": {
            "first_name": "Soeurm ",
            "last_name": "Soth"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e3e8d99f-d5f7-4258-b7d6-fbc292c144141052023jpeg.png",
            "name": "e3e8d99f-d5f7-4258-b7d6-fbc292c144141052023jpeg.png"
        },
        "date_of_birth": "2002-04-21T03:11:11.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "096 9527 251",
        "email": "sothsoeurm@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "រដ្ឋបាលសិក្សា\n",
                "key": {
                    "$date": "2022-11-02T03:15:14.042Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T03:14:26.765Z"
        },
        "__v": 0,
        "employee_id": "00517",
        "join_date": {
            "$date": "2022-11-02T03:14:59.911Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e614108a2abb8c17ff2057"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d8"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6362167d82da276b1b9b1dbf"
        },
        "national_id": "180843025",
        "khmer_name": {
            "first_name": "ឈ្លី ",
            "last_name": "ចតុរ៉ុង"
        },
        "latin_name": {
            "first_name": "Chhly ",
            "last_name": "Chaktokrong"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/d066e3c7-22b9-49f3-a588-80fb67f15a381052023jpeg.png",
            "name": "d066e3c7-22b9-49f3-a588-80fb67f15a381052023jpeg.png"
        },
        "date_of_birth": "1999-01-01T06:57:35.000Z",
        "place_of_birth": "ឈូករ័ត្ន ចន្លាស់ដៃ ក្រឡាញ់ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 5544 868",
        "email": "chhlychaktokrong@gmail.com",
        "current_address": "ឈូករ័ត្ន ចន្លាស់ដៃ ក្រឡាញ់ សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "Go Global School",
                "company": "Frontend Developer",
                "key": {
                    "$date": "2022-11-02T07:17:31.675Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T07:04:29.020Z"
        },
        "__v": 0,
        "employee_id": "00401",
        "join_date": {
            "$date": "2021-11-01T07:12:47.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e6102a8a2abb8c17ff1e2c"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "adminRole": "superAdmin",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79d9"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636231a582da276b1b9b2b53"
        },
        "national_id": "180872321",
        "khmer_name": {
            "first_name": "ផាន់ ",
            "last_name": "សុភ័ក្រ"
        },
        "latin_name": {
            "first_name": "Phan",
            "last_name": " Sopheak"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9261cde3-d263-49a5-8e72-fb9a24dd70091052023jpeg.png",
            "name": "9261cde3-d263-49a5-8e72-fb9a24dd70091052023jpeg.png"
        },
        "date_of_birth": "1998-07-06T08:57:29.000Z",
        "place_of_birth": "ចុងកៅស៊ូ ស្លក្រាម សៀមរាប",
        "nationality": "Cambodian",
        "phone": " 092 549 279",
        "email": "phansopheak@gmail.com",
        "current_address": "ធ្លលអណ្តូង ស្លក្រាម សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "",
                "title": "",
                "company": "",
                "key": {
                    "$date": "2022-11-02T09:01:29.615Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T09:00:21.266Z"
        },
        "__v": 0,
        "employee_id": "00418",
        "join_date": {
            "$date": "2022-01-03T09:00:33.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b4f7f1976db3c6a7924a71"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79da"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6362365682da276b1b9b31ca"
        },
        "national_id": "180841884",
        "khmer_name": {
            "first_name": "គៀន ",
            "last_name": "លេងហ៊ាង"
        },
        "latin_name": {
            "first_name": "​​​Kien ",
            "last_name": "Lengheang"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/70a40f47-1aaa-4c83-9718-cc4ae0c329941132022jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1999-05-25T09:10:54.000Z",
        "place_of_birth": "ស្លក្រាម, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096​ 788 1337",
        "email": "kienleangheang@gmail.com",
        "current_address": "ស្លក្រាម, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T09:20:23.008Z"
        },
        "__v": 0,
        "employee_id": "00435",
        "join_date": {
            "$date": "2022-02-28T09:21:05.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9ed8a2b4b8821e89e99d0"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79db"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6362384582da276b1b9b3430"
        },
        "national_id": "180940141",
        "khmer_name": {
            "first_name": "រស់ ",
            "last_name": "អមរា"
        },
        "latin_name": {
            "first_name": "Ros ",
            "last_name": "Amra"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/12e8eab9-7d95-4f65-9859-eb2b80cae4d31102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2002-02-17T09:24:01.000Z",
        "place_of_birth": "ដូនស្វា, សំរោងយា, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 318 9980",
        "email": "rosamra@gmail.com",
        "current_address": "ដូនស្វា, សំរោងយា, ពួក, សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-02T09:28:37.190Z"
        },
        "__v": 0,
        "employee_id": "00474",
        "join_date": {
            "$date": "2022-11-06T07:59:05.981Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b4f8b2976db3c6a7924c49"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79dc"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63675b0fbc0178df38a25b86"
        },
        "national_id": "123456789",
        "khmer_name": {
            "first_name": "ញ៉ែម",
            "last_name": "ស៊ីណាត"
        },
        "latin_name": {
            "first_name": "Nheam",
            "last_name": "Synath"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/02a2ef60-fdd6-4d25-9e0b-ba2aeda8f4091102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1993-11-06T06:49:54.570Z",
        "place_of_birth": "ត្បូងឃ្មុំ",
        "nationality": "Cambodian",
        "phone": "070​ 745 790",
        "email": "nheamsynath@gmial.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T06:58:23.416Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "63e753d78a2abb8c17ff576d"
        },
        "working_status": "resign",
        "employee_id": "00483",
        "join_date": {
            "$date": "2023-05-16T03:57:07.250Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "63675d37bc0178df38a25cec"
        },
        "national_id": "180967204",
        "khmer_name": {
            "first_name": "រ៉ែន",
            "last_name": "នីត"
        },
        "latin_name": {
            "first_name": "Ren",
            "last_name": "Nit"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/71c75aaf-ae1d-48cd-88c2-bb164db028eb1102022jpg.png",
            "name": "71c75aaf-ae1d-48cd-88c2-bb164db028eb1102022jpg.png"
        },
        "date_of_birth": "2002-12-07T07:03:22.000Z",
        "place_of_birth": "ព្រៃធំ, ស្រង៉ែ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 715 3324",
        "email": "rennit@gmail.com",
        "current_address": "ព្រៃធំ, ស្រង៉ែ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T07:07:35.589Z"
        },
        "__v": 0,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63675e66bc0178df38a25d97"
        },
        "national_id": "123456987",
        "khmer_name": {
            "first_name": "រ៉ន",
            "last_name": "សំអាត"
        },
        "latin_name": {
            "first_name": "Ron",
            "last_name": "Samath"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1f15d309-fd3d-4c54-89b4-2ef969b9d2641102022jpg.png",
            "name": "1f15d309-fd3d-4c54-89b4-2ef969b9d2641102022jpg.png"
        },
        "date_of_birth": "2006-07-02T07:08:29.000Z",
        "place_of_birth": "តាត្រាវ, ស្វាយចេក, អង្គរធំ, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 586 9606",
        "email": "ronsamath@gmai.com",
        "current_address": "កន្ត្រក, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T07:12:38.146Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-06T07:13:29.168Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae5952b4b8821e89f02f5"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63676296bc0178df38a26061"
        },
        "national_id": "180868438",
        "khmer_name": {
            "first_name": "ផាន់",
            "last_name": "ខាំថង"
        },
        "latin_name": {
            "first_name": "Phan",
            "last_name": "khamthorng"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/db72d82c-6250-4912-87a6-fc4feec2c3d11152022jpg.png",
            "name": "db72d82c-6250-4912-87a6-fc4feec2c3d11152022jpg.png"
        },
        "date_of_birth": "2000-08-02T07:25:48.000Z",
        "place_of_birth": "គ្រួស ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "089​ 389 046",
        "email": "phankhamthorng@gmail.com",
        "current_address": "ទក្សិណខាងត្បូង, គោកចក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T07:30:30.888Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-25T04:05:52.078Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63676364bc0178df38a260d6"
        },
        "national_id": "200265945",
        "khmer_name": {
            "first_name": "សុត",
            "last_name": "មករា"
        },
        "latin_name": {
            "first_name": "Sot",
            "last_name": "Makara"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/42795f76-7f73-4f8f-9199-5cf218273a631152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2003-01-30T07:31:04.000Z",
        "place_of_birth": "ឯកភាព ត្រពាំងប្រីយ៍ អន្លង់វែង ឧត្តរមានជ័យ",
        "nationality": "Cambodian",
        "phone": "071 510 1515",
        "email": "sotmakara@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T07:33:56.273Z"
        },
        "__v": 0,
        "employee_id": "00502",
        "join_date": {
            "$date": "2022-11-25T04:10:04.042Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63ea046d2b4b8821e89ebd81"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63676427bc0178df38a2614f"
        },
        "national_id": "180932949",
        "khmer_name": {
            "first_name": "យង់",
            "last_name": " វណ្ណី"
        },
        "latin_name": {
            "first_name": "Yong",
            "last_name": "Vanny"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/08d95fb2-db3f-4c71-a0dd-e85022b2b2041152022jpg.png",
            "name": "08d95fb2-db3f-4c71-a0dd-e85022b2b2041152022jpg.png"
        },
        "date_of_birth": "2002-01-01T07:34:21.000Z",
        "place_of_birth": "តាត្រា​វ កន្រាំង ស្រុកប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "0715101515",
        "email": "yongvanny@gmail.com",
        "current_address": "តាត្រា​វ កន្រាំង ស្រុកប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T07:37:11.228Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-11T00:34:27.669Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636764febc0178df38a261c1"
        },
        "national_id": "180977296",
        "khmer_name": {
            "first_name": "ឃាន់",
            "last_name": "រចនា"
        },
        "latin_name": {
            "first_name": "Kheann",
            "last_name": "Rachana"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9381cc4c-a2d8-48cb-a485-041157052a801102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2003-05-21T07:37:37.000Z",
        "place_of_birth": "កក្រាញ់ សៀមរាប សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "093 753 871",
        "email": "kheannrachana@gmail.com",
        "current_address": "កក្រាញ់ សៀមរាប សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T07:40:46.098Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "63eae6402b4b8821e89f03c9"
        },
        "working_status": "resign",
        "employee_id": "00534",
        "join_date": {
            "$date": "2023-02-14T03:17:14.179Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "636765cfbc0178df38a26235"
        },
        "national_id": "789456123",
        "khmer_name": {
            "first_name": "ព្រៅ",
            "last_name": "សាំងឌី"
        },
        "latin_name": {
            "first_name": "Prao",
            "last_name": "Sanngdy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/d0fd0207-ddde-469b-94a2-7d225086126b1052023jpeg.png",
            "name": "d0fd0207-ddde-469b-94a2-7d225086126b1052023jpeg.png"
        },
        "date_of_birth": "2003-03-03T07:41:12.000Z",
        "place_of_birth": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 228 9507",
        "email": "praopanngdy@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T07:44:15.316Z"
        },
        "__v": 0,
        "employee_id": "00531",
        "join_date": {
            "$date": "2022-11-14T09:24:24.769Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63ea04082b4b8821e89ebd02"
        },
        "working_status": "resign",
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "63676a42bc0178df38a263b6"
        },
        "national_id": "180862804",
        "khmer_name": {
            "first_name": "លី",
            "last_name": "លាវ"
        },
        "latin_name": {
            "first_name": "Ly",
            "last_name": "Leav"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5d248514-b2b2-4739-bbed-cbe3b361c6661052023jpeg.png",
            "name": "5d248514-b2b2-4739-bbed-cbe3b361c6661052023jpeg.png"
        },
        "date_of_birth": "1993-03-06T07:59:31.000Z",
        "place_of_birth": "ភូមិវាល សំបួរ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 75 60 800",
        "email": "lyleav@gmail.com",
        "current_address": "ភូមិវាល សំបួរ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:03:14.424Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "64b4ff22976db3c6a792541d"
        },
        "working_status": "working",
        "employee_id": "00150",
        "join_date": {
            "$date": "2023-03-30T02:00:59.295Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79dd"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63676cb3bc0178df38a26564"
        },
        "national_id": "180744550",
        "khmer_name": {
            "first_name": "វ៉ៃ ",
            "last_name": "ណាគ្រី"
        },
        "latin_name": {
            "first_name": "Vai ",
            "last_name": "Nakrey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/6ace695a-5b15-48ca-bafc-81ca0d0c757b1052023jpeg.png",
            "name": "6ace695a-5b15-48ca-bafc-81ca0d0c757b1052023jpeg.png"
        },
        "date_of_birth": "1999-02-10T08:10:44.000Z",
        "place_of_birth": "អូររលុះ ដំដែក សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "016 843 107",
        "email": "vainakrey@gmail.com",
        "current_address": "អូររលុះ ដំដែក សូទ្រនិគម សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:13:39.892Z"
        },
        "__v": 0,
        "employee_id": "00261",
        "join_date": {
            "$date": "2022-11-06T08:14:04.465Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b507bb976db3c6a7926e25"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79de"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63676f3fbc0178df38a2661e"
        },
        "national_id": "180395553(01)",
        "khmer_name": {
            "first_name": "ញ៉ឹប ",
            "last_name": "កណ្ណិកា"
        },
        "latin_name": {
            "first_name": "Nheb ",
            "last_name": "Kanika"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c061bf95-637a-45f2-b8e7-18db01b07ae11102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1986-09-27T08:21:23.000Z",
        "place_of_birth": "កំពង់ស្វាយ កំពង់ស្វាយ កំពង់ស្វាយ កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "092 769 525",
        "email": "nhebkanika@gmail.com",
        "current_address": "ភូមិថ្មី ស្វាយដង្គំ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:24:31.744Z"
        },
        "__v": 0,
        "employee_id": "00080",
        "join_date": {
            "$date": "2022-11-06T08:24:39.702Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50834976db3c6a7926ec4"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79df"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6367700abc0178df38a266ac"
        },
        "national_id": "180823647",
        "khmer_name": {
            "first_name": "ខាន់ ",
            "last_name": "ភៅ"
        },
        "latin_name": {
            "first_name": "Khann ",
            "last_name": "Phao"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ef42b3e3-8baf-463b-9816-b4f38aad2d771102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1999-01-06T08:25:09.000Z",
        "place_of_birth": "ចំបក់ រលួស ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "095 561 838",
        "email": "khannphao@gmail.com",
        "current_address": "ចំបក់ រលួស ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:27:54.183Z"
        },
        "__v": 0,
        "employee_id": "00276",
        "join_date": {
            "$date": "2022-11-06T08:28:01.305Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5089b976db3c6a7926f36"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e0"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63677113bc0178df38a26731"
        },
        "national_id": "180819728",
        "khmer_name": {
            "first_name": "ចាប ",
            "last_name": "កន្នីដ្ឋា"
        },
        "latin_name": {
            "first_name": "Chab ",
            "last_name": "Kanitha"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/48c646e3-7f9a-4ee1-96fa-3121b429e6e91052023jpeg.png",
            "name": "48c646e3-7f9a-4ee1-96fa-3121b429e6e91052023jpeg.png"
        },
        "date_of_birth": "1999-07-05T08:28:35.000Z",
        "place_of_birth": "ស្ពានជ្រាវ សៀមរាប  សៀមរាប",
        "nationality": "Cambodian",
        "phone": "011 579 592",
        "email": "chabkanitha@gmail.com",
        "current_address": "ស្ពានជ្រាវ សៀមរាប  សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:32:19.110Z"
        },
        "__v": 0,
        "employee_id": "00143",
        "join_date": {
            "$date": "2022-11-06T08:32:24.171Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50902976db3c6a7927017"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e1"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636771aebc0178df38a26797"
        },
        "national_id": "180741681",
        "khmer_name": {
            "first_name": "ភាវ ",
            "last_name": "ចាន់សោភ័ណ"
        },
        "latin_name": {
            "first_name": "Pheav ",
            "last_name": "Chansouphean"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5ce2e246-cbd8-4ea3-844a-b60ce30e8bf41102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2022-11-06T08:32:39.075Z",
        "place_of_birth": "ប្រាសាទ សំរោងយា ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 208 3268",
        "email": "pheavchansouphean@gmail.com",
        "current_address": "ប្រាសាទ សំរោងយា ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:34:54.750Z"
        },
        "__v": 0,
        "employee_id": "00264",
        "join_date": {
            "$date": "2022-11-06T08:35:05.933Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e2"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63677312bc0178df38a26843"
        },
        "national_id": "180908958",
        "khmer_name": {
            "first_name": "គា ",
            "last_name": "ឆាយវលក្ខ"
        },
        "latin_name": {
            "first_name": "Kea ",
            "last_name": "chhayvoleak "
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/3e18b277-31a1-4a30-8b9f-64c9c0645b9c1102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2022-11-06T08:35:52.867Z",
        "place_of_birth": "គោកត្នោត គោចក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "090 321 511",
        "email": "voleak@gmail.com",
        "current_address": "គោកត្នោត គោចក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:40:50.201Z"
        },
        "__v": 0,
        "employee_id": "00403",
        "join_date": {
            "$date": "2022-11-06T08:40:55.695Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b509b3976db3c6a7927167"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e3"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636773cbbc0178df38a268af"
        },
        "national_id": "180740304",
        "khmer_name": {
            "first_name": "រៃ ",
            "last_name": "ស្រស់"
        },
        "latin_name": {
            "first_name": "Rey ",
            "last_name": "Sras"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b7575a3b-99e1-4b05-8502-3608de5731a51102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1999-06-01T08:41:22.000Z",
        "place_of_birth": "ល្វា ត្រពាំងធំ ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "092 280 349",
        "email": "reysras@gmail.com",
        "current_address": "ល្វា ត្រពាំងធំ ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:43:55.644Z"
        },
        "__v": 0,
        "employee_id": "00419",
        "join_date": {
            "$date": "2022-11-06T08:44:21.473Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50a7d976db3c6a792731b"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e4"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636774f0bc0178df38a26949"
        },
        "national_id": "180737222",
        "khmer_name": {
            "first_name": "ស្ដើង ",
            "last_name": "ធិប"
        },
        "latin_name": {
            "first_name": "Sdoeung  ",
            "last_name": "thib"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/bf0c503f-1c51-436b-994c-0a1f32c22b131102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1999-08-19T08:44:41.000Z",
        "place_of_birth": "លៀប ពាក់ស្នែង អង្គរធំ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "061 728 548",
        "email": "thib@gmail.com",
        "current_address": "លៀប ពាក់ស្នែង អង្គរធំ សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:48:48.724Z"
        },
        "__v": 0,
        "employee_id": "00545",
        "join_date": {
            "$date": "2022-11-06T08:49:03.338Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "640706912874346224a4e0c3"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e5"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636775fabc0178df38a269d5"
        },
        "national_id": "150340150",
        "khmer_name": {
            "first_name": "ញឹម ",
            "last_name": "ចន្តា"
        },
        "latin_name": {
            "first_name": "Nhim ",
            "last_name": "Chanda"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e950e826-7f3d-4500-ae9c-32bb991aeb5c1052023jpeg.png",
            "name": "e950e826-7f3d-4500-ae9c-32bb991aeb5c1052023jpeg.png"
        },
        "date_of_birth": "1985-01-01T08:50:33.000Z",
        "place_of_birth": "គគីជូរ តាំងក្រសាំង សន្ទុក កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "092​ 301 843",
        "email": "nhimchanda@gmail.com",
        "current_address": "វាល សំបូរ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:53:14.217Z"
        },
        "__v": 0,
        "employee_id": "00430",
        "join_date": {
            "$date": "2022-11-06T08:53:22.074Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50bdc976db3c6a7927b17"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e6"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636776e7bc0178df38a26a62"
        },
        "national_id": "180637989",
        "khmer_name": {
            "first_name": "ញឹក ",
            "last_name": "ស្រីនាង"
        },
        "latin_name": {
            "first_name": "Nhik ",
            "last_name": "Sreyneang"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/968a76c1-e80c-41fb-a16e-478b83b3b4bc1052023jpeg.png",
            "name": "968a76c1-e80c-41fb-a16e-478b83b3b4bc1052023jpeg.png"
        },
        "date_of_birth": "2022-11-06T08:54:34.151Z",
        "place_of_birth": "យាង, យាង, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "011 384 837",
        "email": "nhiksreyneang@gmail.com",
        "current_address": "វត្តស្វាយ, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:57:11.046Z"
        },
        "__v": 0,
        "employee_id": "00433",
        "join_date": {
            "$date": "2022-11-06T08:57:27.043Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50c3a976db3c6a7927b8f"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e7"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6367777ebc0178df38a26b35"
        },
        "national_id": "180168022 (0)",
        "khmer_name": {
            "first_name": " ហួត ",
            "last_name": "ចន្រ្ទា"
        },
        "latin_name": {
            "first_name": "Huot ",
            "last_name": "Chantrea"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1b9a956c-3445-4da7-bf01-3f7151078f241102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1975-01-06T08:57:44.000Z",
        "place_of_birth": "គោកថ្មី ពួក ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 804 689",
        "email": "huotchantrea@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T08:59:42.021Z"
        },
        "__v": 0,
        "employee_id": "00431",
        "join_date": {
            "$date": "2022-11-06T09:00:16.869Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50c9a976db3c6a7927c04"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e8"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63677858bc0178df38a26c92"
        },
        "national_id": "180520087",
        "khmer_name": {
            "first_name": "ព្រឿន ",
            "last_name": "ព្រំ"
        },
        "latin_name": {
            "first_name": "Proeun ",
            "last_name": "Prom"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/76000ea8-7bda-4dee-bb04-0dec05585f211052023jpeg.png",
            "name": "76000ea8-7bda-4dee-bb04-0dec05585f211052023jpeg.png"
        },
        "date_of_birth": "1995-01-03T09:00:38.000Z",
        "place_of_birth": "ស្វាយចេក, ស្វាយចេក, អង្គរធំ, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "017 357 659",
        "email": "promproeun120@gmail.com",
        "current_address": "ស្វាយចេក, ស្វាយចេក, អង្គរធំ, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T09:03:20.709Z"
        },
        "__v": 0,
        "employee_id": "00475",
        "join_date": {
            "$date": "2022-11-06T09:03:27.446Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eaf171fd309a78f99df866"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79e9"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6367796bbc0178df38a26ec9"
        },
        "national_id": "150271573",
        "khmer_name": {
            "first_name": "អេង ",
            "last_name": "ដូរ៉ា"
        },
        "latin_name": {
            "first_name": " Eng ",
            "last_name": "Dora"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ba270645-332e-490f-b668-054997ef03e71102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1985-03-25T09:05:40.000Z",
        "place_of_birth": "សានគរ សានគរ​ កំពង់ស្វាយ កំពង់ធំ ",
        "nationality": "Cambodian",
        "phone": "092 466 074",
        "email": "engdora@gmail.com",
        "current_address": "វិហារចិន ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T09:07:55.255Z"
        },
        "__v": 0,
        "employee_id": "00016",
        "join_date": {
            "$date": "2022-11-06T09:08:00.318Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50f1e976db3c6a7927e52"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ea"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63677a0cbc0178df38a2702f"
        },
        "national_id": "170579353",
        "khmer_name": {
            "first_name": "សំ  ",
            "last_name": "មុន្នីរ័ត្ន"
        },
        "latin_name": {
            "first_name": "Sam ",
            "last_name": "Monirath"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9ee01374-2ec7-4198-9fb3-980dcfd9a6061132022png.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1989-12-24T09:08:21.000Z",
        "place_of_birth": "សំណាញ់ ភ្នំសំពៅ បាណន់ បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "092 137 323",
        "email": "sammonirath@gmail.com",
        "current_address": "ចុងកៅស៊ូ ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T09:10:36.268Z"
        },
        "__v": 0,
        "employee_id": "00087",
        "join_date": {
            "$date": "2022-11-06T09:10:40.914Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50fc3976db3c6a7928014"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79eb"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63677aa9bc0178df38a270ed"
        },
        "national_id": "180009244(01)",
        "khmer_name": {
            "first_name": "ស្រ៊ុន ",
            "last_name": "គឹមស្រៀន"
        },
        "latin_name": {
            "first_name": "Srun ",
            "last_name": "Kimsrien"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/50389b8f-cb9c-443d-86a1-10af2e7748081102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1980-09-24T09:11:14.000Z",
        "place_of_birth": "ប្រាសាទ ឈូកខ្សាច់ បារាយណ៍ កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "071 496 5123",
        "email": "srunkimsrien@gmail.com",
        "current_address": "ជន្លង់ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T09:13:13.876Z"
        },
        "__v": 0,
        "employee_id": "00314",
        "join_date": {
            "$date": "2022-11-06T09:13:25.106Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b51075976db3c6a792812e"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ec"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63677bb8bc0178df38a271b4"
        },
        "national_id": "170131594",
        "khmer_name": {
            "first_name": "សុង   ",
            "last_name": "សំអាន"
        },
        "latin_name": {
            "first_name": "Song ",
            "last_name": "Saman"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f967975c-8f88-466b-a57a-2745438cb46c1102022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1981-05-09T09:13:56.000Z",
        "place_of_birth": "ថ្មី កំពង់ព្រៀង សង្កែ បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "092 141 568",
        "email": "songsaman@gmail.com",
        "current_address": "គ្រួស ស្វាយដង្គំ សៀមរាប​ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T09:17:44.802Z"
        },
        "__v": 0,
        "employee_id": "00083",
        "join_date": {
            "$date": "2022-11-06T09:17:52.333Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b510e5976db3c6a7928201"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ed"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63677c7dbc0178df38a27233"
        },
        "national_id": "110292903",
        "khmer_name": {
            "first_name": "អែម     ",
            "last_name": "ឡាវី"
        },
        "latin_name": {
            "first_name": "Em ",
            "last_name": "Lavy"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5c9a3d81-fa10-4592-947f-768f60d0248f1132022png.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1988-03-20T09:18:16.000Z",
        "place_of_birth": "ស្រែជា ចំប៉ី អង្គរជ័យ កំពត",
        "nationality": "Cambodian",
        "phone": "092 686 824",
        "email": "emlavy@gmail.com",
        "current_address": "មណ្ឌល៣ ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-06T09:21:01.769Z"
        },
        "__v": 0,
        "employee_id": "00069",
        "join_date": {
            "$date": "2022-11-16T03:16:45.591Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5115b976db3c6a7928339"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ee"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636a4523a4e5ca9bdc310924"
        },
        "national_id": "180715714",
        "khmer_name": {
            "first_name": "លាង ",
            "last_name": "ងន់ហាក់"
        },
        "latin_name": {
            "first_name": "Leang ",
            "last_name": "Ngaonhak"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4a66a450-a131-426d-83ea-87a69adf6c6a1132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1984-10-12T11:57:29.000Z",
        "place_of_birth": "បួន កោះសូទិន កោះសូទិន កំពង់ចាម",
        "nationality": "Cambodian",
        "phone": "012 751 127",
        "email": "leangngaonhak@gmail.com",
        "current_address": "មណ្ឌល៣ ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-08T12:01:39.398Z"
        },
        "__v": 0,
        "employee_id": "00145",
        "join_date": {
            "$date": "2022-11-09T02:54:49.733Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5ecc1976db3c6a793a1ed"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ef"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636a464fa4e5ca9bdc3109c7"
        },
        "national_id": "180497047",
        "khmer_name": {
            "first_name": "នៅ ",
            "last_name": "សុខា"
        },
        "latin_name": {
            "first_name": "Nov ",
            "last_name": "Sokha"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c681b3fb-4f4f-4dac-8437-25640ac5b0f21132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1994-02-10T12:03:31.000Z",
        "place_of_birth": "ពន្លឺព្រះផុស កំពង់ក្ដី ជីក្រែង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "070​​​ 242 478",
        "email": "novsokha@gmail.com",
        "current_address": "បឹង ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-08T12:06:39.107Z"
        },
        "__v": 0,
        "employee_id": "00315",
        "join_date": {
            "$date": "2022-11-09T02:55:39.724Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f4af976db3c6a793a761"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f0"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0852a4e5ca9bdc310abe"
        },
        "national_id": "150772930",
        "khmer_name": {
            "first_name": "ចេន ",
            "last_name": "ធាវៀង"
        },
        "latin_name": {
            "first_name": "Chen ",
            "last_name": "Theaveang"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/93924fd0-736e-47d8-aedd-cef77d801d531152022jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1988-01-08T01:51:25.000Z",
        "place_of_birth": "ប្រិច ទ្រៀល បារាយណ៍ កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "089 541 559",
        "email": "chentheaveang@gmail.com",
        "current_address": "ទ្រាំង ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T01:54:26.494Z"
        },
        "__v": 0,
        "employee_id": "00144",
        "join_date": {
            "$date": "2022-11-11T00:49:13.578Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f538976db3c6a793a7c9"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f1"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0957a4e5ca9bdc310b51"
        },
        "national_id": "101110742",
        "khmer_name": {
            "first_name": "ឃី ",
            "last_name": "ម៉េងហុង"
        },
        "latin_name": {
            "first_name": "Khy ",
            "last_name": "Menghong"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c61d4223-7c68-4f68-a6a0-e18eea04dee61132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1991-07-07T01:55:40.000Z",
        "place_of_birth": "អំពិលវៀល ព្រៃកប្បាស ព្រៃកប្បាស តាកែវ",
        "nationality": "Cambodian",
        "phone": "010 424 733",
        "email": "khymenghong@gmial.com",
        "current_address": "ទ្រាំង ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T01:58:47.541Z"
        },
        "__v": 0,
        "employee_id": "00169",
        "join_date": {
            "$date": "2022-11-16T03:17:42.856Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f5db976db3c6a793a82d"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f2"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b09eea4e5ca9bdc310ba6"
        },
        "national_id": "150530028",
        "khmer_name": {
            "first_name": "កែម ",
            "last_name": "រតនា"
        },
        "latin_name": {
            "first_name": "Kem ",
            "last_name": "Rothana"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/38fe955d-aad6-4743-9a04-50e87826e4c81132022png.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1996-10-14T01:58:59.000Z",
        "place_of_birth": "លាបទង កំពង់ចិនត្បូង ស្ទោង កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "010 573 364",
        "email": "kemrothana@gmial.com",
        "current_address": "វត្ដបូព៌​ សាលាកំរើក សៀមរាប​ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:01:18.022Z"
        },
        "__v": 0,
        "employee_id": "00260",
        "join_date": {
            "$date": "2022-11-16T03:18:42.135Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f63d976db3c6a793a90f"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f3"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0a86a4e5ca9bdc310bf8"
        },
        "national_id": "180867358",
        "khmer_name": {
            "first_name": "គ្រួច ",
            "last_name": "គុយ"
        },
        "latin_name": {
            "first_name": "Kroch ",
            "last_name": "Kuy"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4b8f847f-84b6-484b-a362-893451a2284a1132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1991-02-05T02:01:27.000Z",
        "place_of_birth": "រកា​ ក្របីរៀល ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "093 723 737",
        "email": "krochkuy@gmail.com",
        "current_address": "រកា​ ក្របីរៀល ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:03:50.827Z"
        },
        "__v": 0,
        "employee_id": "00170",
        "join_date": {
            "$date": "2022-11-09T02:58:40.577Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f6c0976db3c6a793a976"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f4"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0b54a4e5ca9bdc310c61"
        },
        "national_id": "180547151",
        "khmer_name": {
            "first_name": "ផន              ",
            "last_name": "សុផុន"
        },
        "latin_name": {
            "first_name": " Phorn ",
            "last_name": "Sophon"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/524affae-d4dd-4a51-a7fd-768582391fce1132022png.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1988-01-01T02:04:10.000Z",
        "place_of_birth": "កំពង់ថ្កូវ មានជ័យ ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077 941 448",
        "email": "phornsophon@gmail.com",
        "current_address": "វាល គោកចក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:07:16.070Z"
        },
        "__v": 0,
        "employee_id": "00088",
        "join_date": {
            "$date": "2022-11-09T03:32:53.162Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f756976db3c6a793aa86"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f5"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0bf9a4e5ca9bdc310cbb"
        },
        "national_id": "180382293(01)",
        "khmer_name": {
            "first_name": "ស៊ន់ ",
            "last_name": "សុធីតា"
        },
        "latin_name": {
            "first_name": "Suon ",
            "last_name": "Sothida"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5e329e2e-084f-4feb-9232-25e7aae415121132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1982-03-25T02:07:27.000Z",
        "place_of_birth": "ខ្នារ ជ្រាវ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "078 677 027",
        "email": "suonsothida@gmail.com",
        "current_address": "ខ្នារ ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:10:01.497Z"
        },
        "__v": 0,
        "employee_id": "00313",
        "join_date": {
            "$date": "2022-11-09T02:59:52.180Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f7be976db3c6a793aaeb"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f6"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0cc5a4e5ca9bdc310d24"
        },
        "national_id": "180300702",
        "khmer_name": {
            "first_name": "សេម ",
            "last_name": "គឹមអង"
        },
        "latin_name": {
            "first_name": "Sem ",
            "last_name": "Kimorng"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/6f87e658-5ad7-45a8-90b4-c31d8fd618c61132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1986-03-10T02:10:35.000Z",
        "place_of_birth": "ព្រះត្រពាំង ដំដែក សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "078 258 429",
        "email": "semkimorng@gmail.com",
        "current_address": "មមាញ រលួស ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:13:25.368Z"
        },
        "__v": 0,
        "employee_id": "00336",
        "join_date": {
            "$date": "2022-11-09T03:00:26.004Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f816976db3c6a793ab4e"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f7"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0d7da4e5ca9bdc310d82"
        },
        "national_id": "180625939",
        "khmer_name": {
            "first_name": "ឡា ",
            "last_name": "ធីតា"
        },
        "latin_name": {
            "first_name": "La ",
            "last_name": "Thida"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/52031da3-6e46-490a-82df-42866843e4841132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1992-05-13T02:13:38.000Z",
        "place_of_birth": "ត្រាង សណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "069 972 696",
        "email": "lathida@gmail.com",
        "current_address": "ត្រាង សណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:16:29.197Z"
        },
        "__v": 0,
        "employee_id": "00316",
        "join_date": {
            "$date": "2022-11-09T03:00:54.485Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5f856976db3c6a793aba8"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f8"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0ea2a4e5ca9bdc310e0d"
        },
        "national_id": "180673838",
        "khmer_name": {
            "first_name": "ថា ",
            "last_name": "ស្រីពិន"
        },
        "latin_name": {
            "first_name": "Tha ",
            "last_name": "Sreypin"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9db66407-9e9a-4dbc-b687-36629f6bc8b71132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1996-06-15T02:16:48.000Z",
        "place_of_birth": "តាទក ពួក ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 8689 355",
        "email": "thasreypin@gmail.com",
        "current_address": "តាទក ពួក ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:21:22.993Z"
        },
        "__v": 0,
        "employee_id": "00366",
        "join_date": {
            "$date": "2022-11-09T03:01:34.158Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5faa9976db3c6a793acaf"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79f9"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b0faba4e5ca9bdc310e8b"
        },
        "national_id": "180627456",
        "khmer_name": {
            "first_name": "ស​រ ",
            "last_name": "ដារុន"
        },
        "latin_name": {
            "first_name": "Sor ",
            "last_name": "Darun"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/001ab608-4cc1-43d2-ac10-3c6b695454f41132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1993-12-02T02:21:40.000Z",
        "place_of_birth": "គោកក្ដុល កំពង់ភ្លុក ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 367 342",
        "email": "sordarun@gmail.com",
        "current_address": "ខ្នារ ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:25:47.321Z"
        },
        "__v": 0,
        "employee_id": "00377",
        "join_date": {
            "$date": "2022-11-09T03:02:05.016Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5fb2f976db3c6a793ad1c"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79fa"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b1061a4e5ca9bdc310eec"
        },
        "national_id": "110271018 (01)",
        "khmer_name": {
            "first_name": "តៀប ",
            "last_name": "រតនា"
        },
        "latin_name": {
            "first_name": "Tiep ",
            "last_name": "Ratna"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0ea57963-5e5a-45fe-9256-c01a0146b1771132022jpg.png",
            "name": "0ea57963-5e5a-45fe-9256-c01a0146b1771132022jpg.png"
        },
        "date_of_birth": "1987-08-06T02:26:05.000Z",
        "place_of_birth": "ដាសស្គរ បឹងសាលាខាងជើង កំពង់ត្រាច កំពត",
        "nationality": "Cambodian",
        "phone": "097 950 7487",
        "email": "tiepratna@gmail.com",
        "current_address": "ភ្ញាជ័យ ស្វាយដង្គំ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:28:49.157Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-09T03:02:41.347Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636b1183a4e5ca9bdc310f8b"
        },
        "national_id": "180553441",
        "khmer_name": {
            "first_name": "ទ្រី ",
            "last_name": "សម្បត្តិ"
        },
        "latin_name": {
            "first_name": "Try ",
            "last_name": "Sombath"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7ab9db3f-257c-4736-b060-70a42b2bae1c1132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1992-05-07T02:29:26.000Z",
        "place_of_birth": "ទឹកថ្លា ខ្នាត ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077 276 677",
        "email": "trysombath@gmail.com",
        "current_address": "ព្រៃក្មេង ខ្នាត ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:33:39.698Z"
        },
        "__v": 0,
        "employee_id": "00378",
        "join_date": {
            "$date": "2022-11-09T03:03:09.411Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5fbbb976db3c6a793ad8a"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79fb"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b1294a4e5ca9bdc311010"
        },
        "national_id": "180282951(01)",
        "khmer_name": {
            "first_name": "ផូ ",
            "last_name": "ប៉ូលីន"
        },
        "latin_name": {
            "first_name": "Pho ",
            "last_name": "Polin"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/43462467-416a-4a59-8aa6-d0da075d0fd61262022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1976-05-27T02:34:56.000Z",
        "place_of_birth": "ផ្សារឃ្លាំង កំពង់ឃ្លាំង សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012​ 821 125",
        "email": "phopolin@gmail.com",
        "current_address": "វត្ដបូព៌​ សាលាកំរើក សៀមរាប​ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:38:12.475Z"
        },
        "__v": 0,
        "employee_id": "00485",
        "join_date": {
            "$date": "2022-12-10T04:28:58.222Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5fc20976db3c6a793adf4"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79fc"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b1364a4e5ca9bdc31107d"
        },
        "national_id": "180693623",
        "khmer_name": {
            "first_name": "ឈុត ",
            "last_name": "ឈូង"
        },
        "latin_name": {
            "first_name": "Chhut ",
            "last_name": "Chhoung"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/078f5265-80c5-480d-9908-d36342a4d1531132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1982-11-05T02:38:19.000Z",
        "place_of_birth": "តាទក ពួក ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 302 736",
        "email": "chhoung@gmail.com",
        "current_address": "តាទក ពួក ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:41:40.056Z"
        },
        "__v": 0,
        "employee_id": "00490",
        "join_date": {
            "$date": "2022-11-16T01:06:51.068Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5fc89976db3c6a793ae5f"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79fd"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b1410a4e5ca9bdc3110d7"
        },
        "national_id": "050670661(01)",
        "khmer_name": {
            "first_name": "និមល ",
            "last_name": "ពិសិដ្ឋ"
        },
        "latin_name": {
            "first_name": "Nimul ",
            "last_name": "Piseth"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/94ac77de-d16d-4223-984a-79363bd7bd371132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1987-09-02T02:41:48.000Z",
        "place_of_birth": "យាងតូច ជីផុច មេសាង ព្រៃវែង",
        "nationality": "Cambodian",
        "phone": "077 276 677",
        "email": "nimul.pisseth@moeys.gov.kh",
        "current_address": "បឹដូនប៉ា ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:44:32.803Z"
        },
        "__v": 0,
        "employee_id": "00491",
        "join_date": {
            "$date": "2022-11-16T01:08:30.671Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5fdfa976db3c6a793b030"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79fe"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b14aea4e5ca9bdc31112d"
        },
        "national_id": "180465440",
        "khmer_name": {
            "first_name": "ដូ ",
            "last_name": "ចំណាន"
        },
        "latin_name": {
            "first_name": "Do",
            "last_name": "Chamnan"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/49ee6183-8b92-4e9b-be37-f8ff42aaffb31132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1989-01-05T02:44:45.000Z",
        "place_of_birth": "តាប្រាត់ មានជ័យ ប្រសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012 881 986",
        "email": "dochamnan@gmail.com",
        "current_address": "មណ្ឌល1 ស្វាយដង្គំ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:47:10.853Z"
        },
        "__v": 0,
        "employee_id": "00492",
        "join_date": {
            "$date": "2022-11-16T01:11:50.989Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5fead976db3c6a793b0a8"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d79ff"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b153fa4e5ca9bdc311181"
        },
        "national_id": "150543546",
        "khmer_name": {
            "first_name": "យ៉ាត ",
            "last_name": "ឡៃហ័ង"
        },
        "latin_name": {
            "first_name": "Yat ",
            "last_name": "Layhoung"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9cc7390f-9475-42b4-ab30-fbdfd8d7a8251262022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1990-03-13T02:47:27.000Z",
        "place_of_birth": "កំពងជ្វា គោល ប្រសាទសំបូរ កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "012 477 714",
        "email": "yatlayhoung@gmail.com",
        "current_address": "គោកជួន ពួក ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T02:49:35.762Z"
        },
        "__v": 0,
        "employee_id": "00493",
        "join_date": {
            "$date": "2022-12-10T02:23:54.218Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5ffae976db3c6a793b15b"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a00"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b1e69a4e5ca9bdc311751"
        },
        "national_id": "180489670",
        "khmer_name": {
            "first_name": "ហេង ",
            "last_name": "ប៊ុនសេង"
        },
        "latin_name": {
            "first_name": "Heng ",
            "last_name": "Bunseng"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c5fa7f7b-c8b9-46a7-9bdb-d7aec9ecf4311132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1996-07-03T03:24:28.000Z",
        "place_of_birth": "វិហាចិន ស្វាយដង្គុំ សៀមរៀប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "086 978 686",
        "email": "hengbunseng@gmail.com",
        "current_address": "វិហាចិន ស្វាយដង្គុំ សៀមរៀប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T03:28:41.629Z"
        },
        "__v": 0,
        "employee_id": "00075",
        "join_date": {
            "$date": "2022-11-09T03:28:56.935Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b600a9976db3c6a793b1cf"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a01"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b1f4ba4e5ca9bdc3117cf"
        },
        "national_id": "180864747",
        "khmer_name": {
            "first_name": "លាង ",
            "last_name": "សុផុង"
        },
        "latin_name": {
            "first_name": "Leang ",
            "last_name": "Sophong"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/387cb931-7997-48f6-a6e8-a276697d34dd1152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-01-01T03:29:28.000Z",
        "place_of_birth": "ឪឡោក បាគង ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "068​​ 284 116",
        "email": "leangsophong@gmail.com",
        "current_address": "ឪឡោក បាគង ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T03:32:27.461Z"
        },
        "__v": 0,
        "employee_id": "00181",
        "join_date": {
            "$date": "2022-11-11T02:23:24.896Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b60799976db3c6a793c6c6"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a02"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b2082a4e5ca9bdc311886"
        },
        "national_id": "180776020",
        "khmer_name": {
            "first_name": "វ៉ាន ",
            "last_name": "វណ្ណ"
        },
        "latin_name": {
            "first_name": "Van ",
            "last_name": "Vann"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/09b841b1-0ae9-4fd4-a3e9-9743752bb4111132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1998-12-06T03:35:34.000Z",
        "place_of_birth": "វាល ជ្រាវ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "081 511 014",
        "email": "vanvann@gmail.com",
        "current_address": "វាល ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T03:37:38.832Z"
        },
        "__v": 0,
        "employee_id": "00209",
        "join_date": {
            "$date": "2022-11-09T03:38:00.417Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b607fa976db3c6a793c738"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a03"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b213aa4e5ca9bdc311911"
        },
        "national_id": "O61794897",
        "khmer_name": {
            "first_name": "តាំង ",
            "last_name": "ឆេងថេង"
        },
        "latin_name": {
            "first_name": "Taing ",
            "last_name": "Chhengtheng"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1e74987d-d2cd-4661-9d76-e317f9a5eb941132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-02-06T03:38:51.000Z",
        "place_of_birth": "កំពង់ចាម",
        "nationality": "Cambodian",
        "phone": "098 901 981",
        "email": "taingchhengtheng@gmail.com",
        "current_address": "បន្ទាយចាស់, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T03:40:42.862Z"
        },
        "__v": 0,
        "employee_id": "00306",
        "join_date": {
            "$date": "2022-11-09T03:41:04.975Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b60854976db3c6a793c7a6"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a04"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b2216a4e5ca9bdc3119aa"
        },
        "national_id": "62066711",
        "khmer_name": {
            "first_name": "តាំង ",
            "last_name": "គង់ហេង"
        },
        "latin_name": {
            "first_name": "Taing ",
            "last_name": "Kongheng"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/decaad1e-2497-461f-9152-3e509ac183a21152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1993-09-15T03:41:25.000Z",
        "place_of_birth": "កំពង់ចាម",
        "nationality": "Cambodian",
        "phone": "098 388 488",
        "email": "taingkongheng@gmail.com",
        "current_address": "បន្ទាយចាស់, ស្លក្រាម, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T03:44:22.511Z"
        },
        "__v": 0,
        "employee_id": "00345",
        "join_date": {
            "$date": "2022-11-11T02:21:23.951Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b6089d976db3c6a793c814"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a05"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b22aaa4e5ca9bdc311a0a"
        },
        "national_id": "61559590",
        "khmer_name": {
            "first_name": "ស៊ីម ",
            "last_name": "លីលី"
        },
        "latin_name": {
            "first_name": "Sim ",
            "last_name": "Lyly"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/41e0c06d-9b8d-429b-8fab-4db702aa93691132022JPG.png",
            "name": "41e0c06d-9b8d-429b-8fab-4db702aa93691132022JPG.png"
        },
        "date_of_birth": "1998-02-26T03:44:48.000Z",
        "place_of_birth": "កំពង់ចាម",
        "nationality": "Cambodian",
        "phone": "012​ 703 551",
        "email": "lylysim75@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T03:46:50.843Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-09T03:47:06.836Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636b25b3a4e5ca9bdc311b71"
        },
        "national_id": "556761881",
        "khmer_name": {
            "first_name": "John ",
            "last_name": "O'Leary"
        },
        "latin_name": {
            "first_name": "John ",
            "last_name": "O'Leary"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/67fc3b21-3108-4e9f-a856-6ecd1bf3f1901132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1961-11-11T03:48:40.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "French",
        "phone": "086 407 976",
        "email": "ojjohnoleary@aol.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T03:59:47.742Z"
        },
        "__v": 0,
        "employee_id": "00086",
        "join_date": {
            "$date": "2022-11-09T04:00:12.978Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646481e3c072bd5316c2f096"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a06"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b2772a4e5ca9bdc311c33"
        },
        "national_id": "509806433",
        "khmer_name": {
            "first_name": "Nicola ",
            "last_name": "Taylor"
        },
        "latin_name": {
            "first_name": "Nicola ",
            "last_name": "Taylor"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/48877276-a895-4673-bf61-12f786cf1cbe1132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1969-11-12T04:01:36.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "French",
        "phone": "095 484 11 28",
        "email": "nicxtay9@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T04:07:14.677Z"
        },
        "__v": 0,
        "employee_id": "00251",
        "join_date": {
            "$date": "2022-11-09T07:12:26.492Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64648a2fc072bd5316c2fcbc"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a07"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b2afaa4e5ca9bdc311db3"
        },
        "national_id": "A08612167",
        "khmer_name": {
            "first_name": "Jamie-Lee ",
            "last_name": "Hainsworth"
        },
        "latin_name": {
            "first_name": "Jamie-Lee ",
            "last_name": "Hainsworth"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/59e3777c-03ee-4a75-9b5b-277e2109db561132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-10-10T04:18:15.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "French",
        "phone": "089 355 088",
        "email": "teacherjamieonline@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T04:22:18.596Z"
        },
        "__v": 0,
        "employee_id": "00368",
        "join_date": {
            "$date": "2022-11-09T04:22:32.201Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646486f2c072bd5316c2fa73"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636b2d33a4e5ca9bdc311ebe"
        },
        "national_id": "526531066",
        "khmer_name": {
            "first_name": "Grant ",
            "last_name": "Barnes"
        },
        "latin_name": {
            "first_name": "Grant ",
            "last_name": "Barnes"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7b4d6454-9154-4433-a02a-7107212945191132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1969-03-27T04:23:23.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "French",
        "phone": "096 358 49 48",
        "email": "barnegg@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T04:31:47.674Z"
        },
        "__v": 0,
        "employee_id": "00200",
        "join_date": {
            "$date": "2022-11-09T04:32:33.064Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646484b5c072bd5316c2f6b8"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a08"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b2e44a4e5ca9bdc311f47"
        },
        "national_id": "PA2549530",
        "khmer_name": {
            "first_name": "Stacey ",
            "last_name": "Elisabeth Mix"
        },
        "latin_name": {
            "first_name": "Stacey ",
            "last_name": "Elisabeth Mix"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/dce7e751-a95b-4f01-9468-f580eaac6e691132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1989-03-14T04:33:11.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "Australian",
        "phone": "088 900 56 25",
        "email": "stacey.e.mix@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T04:36:20.929Z"
        },
        "__v": 0,
        "employee_id": "00248",
        "join_date": {
            "$date": "2022-11-09T07:13:01.199Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64648536c072bd5316c2f854"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636b2fa2a4e5ca9bdc311feb"
        },
        "national_id": "NRK01PG16",
        "khmer_name": {
            "first_name": "Elise ",
            "last_name": "Wolters"
        },
        "latin_name": {
            "first_name": "Elise ",
            "last_name": "Wolters"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/95af07c0-1c3a-4888-8e35-be83f571f1ad1132022jpg.png",
            "name": "95af07c0-1c3a-4888-8e35-be83f571f1ad1132022jpg.png"
        },
        "date_of_birth": "1995-03-19T04:37:21.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "Northern Marianan",
        "phone": "085 682 522",
        "email": "elisewolters@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T04:42:10.557Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-09T04:44:49.613Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636b3212a4e5ca9bdc312116"
        },
        "national_id": "A08646677",
        "khmer_name": {
            "first_name": "Mitchell ",
            "last_name": "McGregor"
        },
        "latin_name": {
            "first_name": "Mitchell ",
            "last_name": "McGregor"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9c369fe8-62d4-47f5-998c-57bd1703672f1132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1996-08-08T04:45:06.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "085​​ 706 ​538",
        "email": "mitch.thane08@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T04:52:34.933Z"
        },
        "__v": 0,
        "employee_id": "00360",
        "join_date": {
            "$date": "2022-11-09T07:14:08.643Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64648b55c072bd5316c2fe65"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a09"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b355da4e5ca9bdc31236b"
        },
        "national_id": "GL988725",
        "khmer_name": {
            "first_name": "Melina ",
            "last_name": "Cynthia Bot"
        },
        "latin_name": {
            "first_name": "Melina ",
            "last_name": "Cynthia Bot"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/6f43665e-a556-4c84-8f87-afdd29e67ca91132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1979-10-22T05:02:38.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "Canadian",
        "phone": "092 800 735",
        "email": "melina.bot@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T05:06:37.866Z"
        },
        "__v": 0,
        "employee_id": "00338",
        "join_date": {
            "$date": "2022-11-09T05:07:17.969Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eaf4fbfd309a78f99e069a"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a0a"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b36a3a4e5ca9bdc31257c"
        },
        "national_id": "A05773220",
        "khmer_name": {
            "first_name": "Sheehan ",
            "last_name": "Henry Karamitas"
        },
        "latin_name": {
            "first_name": "Sheehan ",
            "last_name": "Henry Karamitas"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9c401344-941d-430c-8009-6a50f45cf8d51132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1996-02-14T05:08:35.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "089 781 729",
        "email": "sheehank.teacher@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T05:12:03.371Z"
        },
        "__v": 0,
        "employee_id": "00359",
        "join_date": {
            "$date": "2022-11-09T07:13:32.225Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6464862cc072bd5316c2f9c5"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a0b"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b380da4e5ca9bdc3126e4"
        },
        "national_id": "A04184153",
        "khmer_name": {
            "first_name": "Christo ",
            "last_name": "Schenck"
        },
        "latin_name": {
            "first_name": "Christo ",
            "last_name": "Schenck"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/cc672b5e-6845-42b4-867d-6ea67da28abe1152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1991-10-08T05:13:57.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "096​ 990 349",
        "email": "schenck.christo@yahoo.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T05:18:05.979Z"
        },
        "__v": 0,
        "employee_id": "00411",
        "join_date": {
            "$date": "2022-11-09T05:18:51.408Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64648450c072bd5316c2f5ac"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a0c"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b3ab6a4e5ca9bdc312bdc"
        },
        "national_id": "A09197544",
        "khmer_name": {
            "first_name": "Nelamari ",
            "last_name": "Millen"
        },
        "latin_name": {
            "first_name": "Nelamari ",
            "last_name": "Millen"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/68b2045d-153d-4067-a286-617686297a691132022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1993-08-05T05:19:18.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "096 990 5583",
        "email": "millen.nelmari@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T05:29:26.323Z"
        },
        "__v": 0,
        "employee_id": "00410",
        "join_date": {
            "$date": "2022-11-09T05:30:15.487Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64648599c072bd5316c2f8fa"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a0d"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b3f3aa4e5ca9bdc312dea"
        },
        "national_id": "M00262769",
        "khmer_name": {
            "first_name": "Melissa ",
            "last_name": "Harding"
        },
        "latin_name": {
            "first_name": "Melissa ",
            "last_name": "Harding"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/44a6202e-30a8-4102-8f5c-db934c1680761152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1979-12-16T05:30:42.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "096 583 8564",
        "email": "hardingmzzs@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T05:48:42.041Z"
        },
        "__v": 0,
        "employee_id": "00498",
        "join_date": {
            "$date": "2022-11-01T03:58:34.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6464874fc072bd5316c2fad0"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a0e"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b4030a4e5ca9bdc312e67"
        },
        "national_id": "LM899790\n",
        "khmer_name": {
            "first_name": "Bradiey ",
            "last_name": "Presland"
        },
        "latin_name": {
            "first_name": "Bradiey ",
            "last_name": "Presland"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/440f0515-d1f4-4f38-9f2b-61aa00ddae461152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1990-11-09T05:49:29.000Z",
        "place_of_birth": "វិហាចិន ស្វាយដង្គុំ សៀមរាប សៀមរាប",
        "nationality": "New Zealand, NZ",
        "phone": "096 288 7901\n",
        "email": "bradpresland@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T05:52:48.697Z"
        },
        "__v": 0,
        "employee_id": "00499",
        "join_date": {
            "$date": "2022-11-25T03:59:51.506Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646488e2c072bd5316c2fbd8"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a0f"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636b4119a4e5ca9bdc312edd"
        },
        "national_id": "677421983\n",
        "khmer_name": {
            "first_name": "Maci jane ",
            "last_name": "Walker"
        },
        "latin_name": {
            "first_name": "Maci jane",
            "last_name": "Walker"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/de39ac2e-69d4-4d48-a3db-53ae8eb880b01152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1992-03-21T05:54:06.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "American Samoan",
        "phone": "081​​ 625 940\n\n",
        "email": "maci.walker@outlook.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T05:56:41.894Z"
        },
        "__v": 0,
        "employee_id": "00500",
        "join_date": {
            "$date": "2022-11-01T04:01:30.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646483d0c072bd5316c2f47e"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636b4205a4e5ca9bdc312f6d"
        },
        "national_id": "A45678912",
        "khmer_name": {
            "first_name": "Shannon ",
            "last_name": "McGgregor"
        },
        "latin_name": {
            "first_name": "Shannon ",
            "last_name": "McGgregor"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/65a0adf6-6f7f-4782-ab04-1963008a0f251152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1997-10-22T05:58:20.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "077 402 695",
        "email": "shannanhains@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-09T06:00:37.216Z"
        },
        "__v": 0,
        "employee_id": "00501",
        "join_date": {
            "$date": "2022-11-25T04:02:00.160Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64648073c072bd5316c2ee1e"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a10"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "636da807a6625c3053fe0de0"
        },
        "national_id": "B12345678",
        "khmer_name": {
            "first_name": "Una ",
            "last_name": "Conkic"
        },
        "latin_name": {
            "first_name": "Una ",
            "last_name": "Conkic"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/100b3f5f-9f49-410a-813c-1fc17002208e1152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2022-11-11T01:37:10.495Z",
        "place_of_birth": "Canada",
        "nationality": "Canadian",
        "phone": "068 521 32",
        "email": "una1903@live.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-11T01:40:23.147Z"
        },
        "__v": 0,
        "employee_id": "00505",
        "join_date": {
            "$date": "2022-11-25T04:02:23.773Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646489cbc072bd5316c2fc38"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "636daae3a6625c3053fe1224"
        },
        "national_id": "B23456789",
        "khmer_name": {
            "first_name": "Erin ",
            "last_name": "Elizabeth Hogan"
        },
        "latin_name": {
            "first_name": "Erin",
            "last_name": "Elizabeth Hogan"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1d267ad2-1753-4e16-987e-824a42cbc2af1152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2022-11-11T01:46:43.704Z",
        "place_of_birth": "Canada",
        "nationality": "Canadian",
        "phone": "096 762 7124",
        "email": "nire_91@hotmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-11T01:52:35.021Z"
        },
        "__v": 0,
        "employee_id": "00504",
        "join_date": {
            "$date": "2022-11-25T04:03:44.298Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6464887bc072bd5316c2fb8d"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a11"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6371fe3fa6625c3053ff21c0"
        },
        "national_id": "180820597",
        "khmer_name": {
            "first_name": "តង",
            "last_name": "ខេម៉ា"
        },
        "latin_name": {
            "first_name": "Torng",
            "last_name": "Khema"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/27962373-51be-4b4f-950e-ed6091eb48471052023jpeg.png",
            "name": "27962373-51be-4b4f-950e-ed6091eb48471052023jpeg.png"
        },
        "date_of_birth": "1999-12-13T08:32:14.000Z",
        "place_of_birth": "ឈូក ត្រីញ័រ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "092 655 161",
        "email": "torngkhema@gmail.com",
        "current_address": "ស្នាតេជោ បល្ល័ង្ក ប្រសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-14T08:37:20.015Z"
        },
        "__v": 0,
        "employee_id": "00489",
        "join_date": {
            "$date": "2023-01-19T02:47:21.199Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e20d838a2abb8c17fe09e4"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a12"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63720849a6625c3053ff36c2"
        },
        "national_id": "180941106",
        "khmer_name": {
            "first_name": "ឈិត ",
            "last_name": "សក្តិដា"
        },
        "latin_name": {
            "first_name": "Chhit ",
            "last_name": "Sakdeda"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e34154ea-ef3b-4cc7-93c4-6f6bd4433a4b1052023jpeg.png",
            "name": "e34154ea-ef3b-4cc7-93c4-6f6bd4433a4b1052023jpeg.png"
        },
        "date_of_birth": "2001-03-25T09:17:47.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "098 860 209",
        "email": "mr.sakdedachhit2503@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-14T09:20:09.689Z"
        },
        "__v": 0,
        "employee_id": "00543",
        "join_date": {
            "$date": "2022-11-14T09:21:50.198Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eaea502b4b8821e89f0d05"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a13"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63759818a6625c3053ffc3c7"
        },
        "national_id": "180792363",
        "khmer_name": {
            "first_name": "ផាន់",
            "last_name": "កង"
        },
        "latin_name": {
            "first_name": "Phann",
            "last_name": "Kang"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/14a4fefd-2f12-4830-9aa7-6bc6a2a339401142022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1980-08-02T02:01:53.000Z",
        "place_of_birth": "ក្បាលហុង វាល កណ្តៀង ពោធិសាត់",
        "nationality": "Cambodian",
        "phone": "092 806 397",
        "email": "phannkang@gmail.com",
        "current_address": "ភូមិវត្តបូព៌ សាលាកំរើក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-17T02:10:32.777Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "64b60c39976db3c6a793d3d5"
        },
        "working_status": "working",
        "employee_id": "00506",
        "join_date": {
            "$date": "2023-05-03T05:59:26.834Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a14"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6375a83da6625c3053ffcbbd"
        },
        "national_id": "180735403",
        "khmer_name": {
            "first_name": "វេ ",
            "last_name": "សំរេច"
        },
        "latin_name": {
            "first_name": "Ve",
            "last_name": "Somrach"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4e4c1dd9-a638-4348-b3da-95f32c1e1b491052023jpeg.png",
            "name": "4e4c1dd9-a638-4348-b3da-95f32c1e1b491052023jpeg.png"
        },
        "date_of_birth": "1998-03-25T03:14:20.000Z",
        "place_of_birth": "រកាយា កែវពណ៌ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096​ 763 9116",
        "email": "somrach1998@gmail.com",
        "current_address": "ត្រៀក សៀមរាប សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-17T03:19:25.180Z"
        },
        "__v": 0,
        "employee_id": "00488",
        "join_date": {
            "$date": "2022-12-10T09:20:33.122Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b60c95976db3c6a793d5ac"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a15"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6375b174a6625c3053ffd1b1"
        },
        "national_id": "180727927",
        "khmer_name": {
            "first_name": "ម៉ាន់​",
            "last_name": "ម៉ៅ"
        },
        "latin_name": {
            "first_name": "Mann",
            "last_name": "Mao"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7404e196-f46c-42e4-8fb8-b46fb92ee2321142022jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1985-08-06T03:53:25.000Z",
        "place_of_birth": "ព្រៃដង្ហើម កែវពណ៌ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "070318574",
        "email": "mannmao8574@gmail.com",
        "current_address": "ព្រៃដង្ហើម កែវពណ៌ ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-17T03:58:44.679Z"
        },
        "__v": 0,
        "employee_id": "00503",
        "join_date": {
            "$date": "2022-12-27T02:58:29.244Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b50932976db3c6a7927077"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a16"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6375f68da6625c3053ffd8bd"
        },
        "national_id": "150863086",
        "khmer_name": {
            "first_name": "ឈាង",
            "last_name": "កុម្ភៈ"
        },
        "latin_name": {
            "first_name": "Chheang",
            "last_name": "Kumpheak"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/609c423c-0384-43ef-9e90-cfb0b41e6c130552023jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1992-02-13T08:39:00.000Z",
        "place_of_birth": "មណ្ឌល៣ ស្លក្រាម សៀមរាប.  ",
        "nationality": "Cambodian",
        "phone": "093 315 133",
        "email": "kumpheak2025@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-17T08:53:33.472Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "645e05249fe04e893126e670"
        },
        "working_status": "working",
        "employee_id": "00494",
        "join_date": {
            "$date": "2023-05-12T08:22:14.905Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a17"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63804181a6625c305300b26b"
        },
        "national_id": "220148099",
        "khmer_name": {
            "first_name": "វុន ",
            "last_name": "សុភ័ត្រា"
        },
        "latin_name": {
            "first_name": "Von ",
            "last_name": "Sopheaktra"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/10294061-f479-4ee5-bf96-745400fa01361052023jpeg.png",
            "name": "10294061-f479-4ee5-bf96-745400fa01361052023jpeg.png"
        },
        "date_of_birth": "2000-02-17T04:10:34.000Z",
        "place_of_birth": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "010 320 923",
        "email": "sopheaktravon@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T04:16:01.984Z"
        },
        "__v": 0,
        "employee_id": "00509",
        "join_date": {
            "$date": "2022-11-25T04:17:12.655Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63ea033c2b4b8821e89ebc44"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a18"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6380654ba6625c305300b9b7"
        },
        "national_id": "180768689",
        "khmer_name": {
            "first_name": "ម៉ក់ ",
            "last_name": "ឡាន់"
        },
        "latin_name": {
            "first_name": "Mouk ",
            "last_name": "Lann"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b8ef718d-86f1-4edf-97c2-fad5e89aa1f01052023jpeg.png",
            "name": "b8ef718d-86f1-4edf-97c2-fad5e89aa1f01052023jpeg.png"
        },
        "date_of_birth": "1997-02-01T06:46:01.000Z",
        "place_of_birth": "គោកសង្កែ ខ្ចាស់​​ សូនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "060 899 366",
        "email": "mouklann@gmail.com",
        "current_address": "គោកសង្កែ ខ្ចាស់​​ សូនិគម សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T06:48:43.758Z"
        },
        "__v": 0,
        "employee_id": "00510",
        "join_date": {
            "$date": "2022-11-25T06:49:00.254Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63ea03782b4b8821e89ebc86"
        },
        "working_status": "resign",
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "6380665fa6625c305300ba69"
        },
        "national_id": "180506501",
        "khmer_name": {
            "first_name": "រិន ",
            "last_name": "ហុង"
        },
        "latin_name": {
            "first_name": "Rin ",
            "last_name": "Hong"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/46827521-a59d-45dd-88bf-a0300c1cc27f1052023jpeg.png",
            "name": "46827521-a59d-45dd-88bf-a0300c1cc27f1052023jpeg.png"
        },
        "date_of_birth": "1997-07-03T06:50:24.000Z",
        "place_of_birth": "ប្រីយ៍ចាស់ ទឹកវិល ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "078 483 826",
        "email": "rinhong@gmail.com",
        "current_address": "ប្រីយ៍ចាស់ ទឹកវិល ពួក សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T06:53:19.099Z"
        },
        "__v": 0,
        "employee_id": "00507",
        "join_date": {
            "$date": "2022-11-25T06:53:29.056Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae7512b4b8821e89f054f"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a19"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63806811a6625c305300bb4e"
        },
        "national_id": "181010796",
        "khmer_name": {
            "first_name": "ឃៅ ",
            "last_name": "ឃិត្ថាវី"
        },
        "latin_name": {
            "first_name": "Khao ",
            "last_name": "Khithavy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/3e708839-8760-4845-b59e-72a937cacaf01052023jpeg.png",
            "name": "3e708839-8760-4845-b59e-72a937cacaf01052023jpeg.png"
        },
        "date_of_birth": "2003-07-10T06:53:46.000Z",
        "place_of_birth": "ម្កាក់ គោកធ្លកលើ ជីក្រែង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "095 560 796",
        "email": "khithavy@gmial.com",
        "current_address": "វិហារចិន, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T07:00:33.375Z"
        },
        "__v": 0,
        "employee_id": "00514",
        "join_date": {
            "$date": "2022-11-29T01:51:36.785Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae9892b4b8821e89f0b14"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a1a"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63807053a6625c305300bf0d"
        },
        "national_id": "181923213",
        "khmer_name": {
            "first_name": "គង់ ",
            "last_name": "ម៉ាណាត"
        },
        "latin_name": {
            "first_name": "Kong ",
            "last_name": "Manath"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f8b6517b-ba71-4609-9ba0-db82a51aafdc1122022jpg.png",
            "name": "f8b6517b-ba71-4609-9ba0-db82a51aafdc1122022jpg.png"
        },
        "date_of_birth": "2022-11-25T07:23:31.687Z",
        "place_of_birth": "ជ័យ ទឹកវិល សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 367 5443",
        "email": "kong.manath@pucsr.edu.kh",
        "current_address": "ជ័យ ទឹកវិល សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T07:35:47.533Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-29T03:17:56.876Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6380732aa6625c305300bff1"
        },
        "national_id": "125489214",
        "khmer_name": {
            "first_name": "ហឿ ",
            "last_name": "ឡា"
        },
        "latin_name": {
            "first_name": "Hoeur ",
            "last_name": "La"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4dda0ccb-8eda-4f96-b629-3b28986964b81152022jpg.png",
            "name": "4dda0ccb-8eda-4f96-b629-3b28986964b81152022jpg.png"
        },
        "date_of_birth": "1999-11-07T07:45:05.000Z",
        "place_of_birth": "សំរោងកញ្ជោច ឫស្សីលក ជីក្រែង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "015 944 695/077 703 512",
        "email": "hoeurla@gmail.com",
        "current_address": "មណ្ឌលបី ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T07:47:55.008Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-25T07:48:02.864Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6380749ca6625c305300c135"
        },
        "national_id": "254861576",
        "khmer_name": {
            "first_name": "ម៉ឹក ",
            "last_name": "ឈីត"
        },
        "latin_name": {
            "first_name": "Moek ",
            "last_name": "Chhit"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/273ad872-7cf5-4718-92cb-0cdada3c289c1152022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1998-07-20T07:49:02.000Z",
        "place_of_birth": "កណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "015 987 748/078 911 108",
        "email": "chhitramoek123@gmail.com",
        "current_address": "កណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T07:54:04.919Z"
        },
        "__v": 0,
        "employee_id": "00513",
        "join_date": {
            "$date": "2022-11-25T07:54:53.143Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a1b"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "638080a8a6625c305300c340"
        },
        "national_id": "1234695",
        "khmer_name": {
            "first_name": "ហម ",
            "last_name": "អុិញឆេង"
        },
        "latin_name": {
            "first_name": "Hom ",
            "last_name": "Inhchheng"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7e9604cf-35de-4ed9-a80a-708f4b2220731052023jpeg.png",
            "name": "7e9604cf-35de-4ed9-a80a-708f4b2220731052023jpeg.png"
        },
        "date_of_birth": "2022-11-25T08:42:47.823Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "096 356 566",
        "email": "ahchhengsr@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-25T08:45:28.807Z"
        },
        "__v": 0,
        "employee_id": "00511",
        "join_date": {
            "$date": "2022-11-25T08:55:25.545Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63ea02b12b4b8821e89ebb7d"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a1c"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "638417bfa6625c305300e76c"
        },
        "national_id": "180879470",
        "khmer_name": {
            "first_name": "ហួន ",
            "last_name": "ទុយ"
        },
        "latin_name": {
            "first_name": "Huon ",
            "last_name": "Tuy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/b103ac2d-50d4-496b-b25f-516f447ca80a1122022jpg.png",
            "name": "b103ac2d-50d4-496b-b25f-516f447ca80a1122022jpg.png"
        },
        "date_of_birth": "1999-10-01T02:04:57.000Z",
        "place_of_birth": "អារញ្ញ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "070 729 978",
        "email": "tuyhuorn@gmail.com",
        "current_address": "វាល​ សំបួរ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-28T02:06:55.068Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-11-29T01:52:31.213Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "6386cfa9a6625c3053013c2d"
        },
        "national_id": "M12345678",
        "khmer_name": {
            "first_name": "មៀច ",
            "last_name": "ល័យហ៊ួរ"
        },
        "latin_name": {
            "first_name": "Miech ",
            "last_name": "Layhour"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e48fbaad-7e72-47f2-8dcc-94bef4c65b8b1052023jpeg.png",
            "name": "e48fbaad-7e72-47f2-8dcc-94bef4c65b8b1052023jpeg.png"
        },
        "date_of_birth": "1994-10-06T03:19:44.000Z",
        "place_of_birth": "តាចេត សំរោងយា ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "010 428 773 ",
        "email": "layhourmiech1234@gmail.com",
        "current_address": "វាល គោកចក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-30T03:36:09.731Z"
        },
        "__v": 0,
        "employee_id": "00516",
        "join_date": {
            "$date": "2022-11-30T03:36:24.348Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b611e7976db3c6a793ded8"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a1d"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6386d1d3a6625c3053013d4e"
        },
        "national_id": "180508497",
        "khmer_name": {
            "first_name": "សៅ ",
            "last_name": "កក្កដា"
        },
        "latin_name": {
            "first_name": "Sao ",
            "last_name": "Kakada"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ec544bca-e702-4b11-b8c8-f39754b96cf71242022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1997-07-13T03:42:16.000Z",
        "place_of_birth": "ដូនស្វា​ ចារឈូក អង្គរជុំ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "087 645 335",
        "email": "kakadasao08@gmail.com",
        "current_address": "ដូនស្វា​ ចារឈូក អង្គរជុំ សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-11-30T03:45:23.792Z"
        },
        "__v": 0,
        "employee_id": "00518",
        "join_date": {
            "$date": "2022-12-01T07:44:33.787Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b634bc976db3c6a7945a9a"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a1e"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "638ebc6ca6625c3053020b77"
        },
        "national_id": "180610843",
        "khmer_name": {
            "first_name": "សុខ ",
            "last_name": "រដ្ឋា"
        },
        "latin_name": {
            "first_name": "Sok ",
            "last_name": "Ratha"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/6d599a11-6319-4ae5-bbd9-03a0dc13998c1222022jpg.png",
            "name": "6d599a11-6319-4ae5-bbd9-03a0dc13998c1222022jpg.png"
        },
        "date_of_birth": "2022-12-06T03:47:27.248Z",
        "place_of_birth": "កំពង់ថ្កូវ មានជ័យ ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "012​ 340 654 ",
        "email": "sokratha@gmail.com",
        "current_address": "កំពង់ថ្កូវ មានជ័យ ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-12-06T03:52:12.945Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2022-12-06T03:52:26.827Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63944c03a6625c305302dc43"
        },
        "national_id": "180537017",
        "khmer_name": {
            "first_name": "រឿង​ ",
            "last_name": "សូនី"
        },
        "latin_name": {
            "first_name": "Roeung ",
            "last_name": "Sony"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/3949834d-7483-4279-8fcf-8783e6593b9a1262022jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1994-10-10T08:57:00.000Z",
        "place_of_birth": "ដីក្រហម កំពង់ភ្លក់​ ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 614 2495",
        "email": "roeungsony@gmail.com",
        "current_address": "បឹងដូនប៉ា ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-12-10T09:06:11.392Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "64b4febd976db3c6a7925392"
        },
        "working_status": "resign",
        "employee_id": "00519",
        "join_date": {
            "$date": "2023-05-16T03:23:15.865Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "63969585a6625c305302f9e4"
        },
        "national_id": "238990597",
        "khmer_name": {
            "first_name": "នឿន ",
            "last_name": "គឹមសឿម"
        },
        "latin_name": {
            "first_name": "Noeun ",
            "last_name": "Kimsoeum"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/dec5a56c-9ae2-42c1-81e4-b8a1b8d187b91212022jpeg.png",
            "name": "dec5a56c-9ae2-42c1-81e4-b8a1b8d187b91212022jpeg.png"
        },
        "date_of_birth": "2000-09-09T02:42:13.000Z",
        "place_of_birth": "ជ្រៃ កណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 238 9905",
        "email": "noeunkimsoeum09@gmail.com",
        "current_address": "ជ្រៃ កណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "internship",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2022-12-12T02:44:21.663Z"
        },
        "__v": 0,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63b3f19275fc260cef2dcfff"
        },
        "national_id": "180852841",
        "khmer_name": {
            "first_name": "ផាន​ ",
            "last_name": "ស៊ីមហេង"
        },
        "latin_name": {
            "first_name": "Phan ",
            "last_name": "Simheng"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/64a2a125-5716-4605-8ded-a5cdc91990ca1052023jpeg.png",
            "name": "64a2a125-5716-4605-8ded-a5cdc91990ca1052023jpeg.png"
        },
        "date_of_birth": "2000-01-22T09:07:53.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "085 890 304",
        "email": "phansimheng@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-03T09:12:50.852Z"
        },
        "__v": 0,
        "employee_id": "00520",
        "join_date": {
            "$date": "2023-01-02T09:15:35.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63eae89d2b4b8821e89f087c"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a1f"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63bbf47675fc260cef2ec489"
        },
        "national_id": "A08612167",
        "khmer_name": {
            "first_name": "លឿង ",
            "last_name": "តារា"
        },
        "latin_name": {
            "first_name": "Loeung ",
            "last_name": "Dara"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/80aa5aed-43af-41b1-801e-5b9ac4b65f260132023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1970-01-09T10:57:21.008Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "Cambodian",
        "phone": "0889145150",
        "email": "loeungdara@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-09T11:03:18.638Z"
        },
        "__v": 0,
        "employee_id": "00521",
        "join_date": {
            "$date": "2023-01-18T03:39:35.506Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b4ff80976db3c6a792553f"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a20"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63bd1b9d75fc260cef2ef163"
        },
        "national_id": "180936779",
        "khmer_name": {
            "first_name": "ព្រឿន ",
            "last_name": "ស្រីណា"
        },
        "latin_name": {
            "first_name": "Proeurn ",
            "last_name": "Sreyna"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4e78cf67-093f-4610-8a55-8aaa278730670122023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2002-06-02T07:59:36.000Z",
        "place_of_birth": "ស្វាយចេក ស្វាយចេក អង្គរធំ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "060 747 397",
        "email": "proeunsreyna@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប ​សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-10T08:02:37.071Z"
        },
        "__v": 0,
        "employee_id": "00555",
        "join_date": {
            "$date": "2023-01-10T08:03:21.538Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63bd260075fc260cef2ef8fd"
        },
        "national_id": "A08612167",
        "khmer_name": {
            "first_name": "សេក ",
            "last_name": "គឹមលីន"
        },
        "latin_name": {
            "first_name": "Sek ",
            "last_name": "Kimlin"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/34f8f95a-0749-4a7d-8c59-b819849ba5b30122023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1978-07-05T08:44:17.000Z",
        "place_of_birth": "ខេត្តកំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "088 914 5150",
        "email": "sekkimlin45@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-10T08:46:56.105Z"
        },
        "__v": 0,
        "employee_id": "00522",
        "join_date": {
            "$date": "2023-01-10T08:47:44.685Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b507a5976db3c6a7926e10"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a21"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63c64d6875fc260cef3072d9"
        },
        "national_id": "180758132",
        "khmer_name": {
            "first_name": "ហេង ",
            "last_name": "សេងហ៊ាង"
        },
        "latin_name": {
            "first_name": "Heng ",
            "last_name": "Sengheang"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e425fa3a-6746-4813-8807-1e727799d13b0142023jpg.png",
            "name": "e425fa3a-6746-4813-8807-1e727799d13b0142023jpg.png"
        },
        "date_of_birth": "1999-12-06T07:23:19.000Z",
        "place_of_birth": "សាលាកន្សែង​ ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "011 357 226",
        "email": "hengsengheang62@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-17T07:25:28.503Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-01-17T02:55:05.000Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63c64e5075fc260cef3073a6"
        },
        "national_id": "K215478963",
        "khmer_name": {
            "first_name": "មឿន ",
            "last_name": "គិមសែន"
        },
        "latin_name": {
            "first_name": "Moeun ",
            "last_name": "Kimsen"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1c6d6231-6464-4bc2-88c3-106ede99a1431052023jpeg.png",
            "name": "1c6d6231-6464-4bc2-88c3-106ede99a1431052023jpeg.png"
        },
        "date_of_birth": "1997-02-08T07:26:21.000Z",
        "place_of_birth": "ប្រដាក់ ព្រៃជ្រូក ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "078 525 289",
        "email": "kimsen@gmail.com",
        "current_address": "ស្លក្រាម ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-17T07:29:20.412Z"
        },
        "__v": 0,
        "employee_id": "00525",
        "join_date": {
            "$date": "2023-01-16T07:29:51.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5074f976db3c6a7926db9"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a22"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63c64f4f75fc260cef30744d"
        },
        "national_id": "V587963254",
        "khmer_name": {
            "first_name": "គឹម ",
            "last_name": "វណ្ណា"
        },
        "latin_name": {
            "first_name": "Kim ",
            "last_name": "Vanna "
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/3370bfe5-dbed-4f0b-a790-4851209a4d770122023jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1985-06-05T07:30:29.000Z",
        "place_of_birth": "ធាយ វត្តអង្គខាងត្បូង បន្ទាយមាស កំពត",
        "nationality": "Cambodian",
        "phone": "092 311 163",
        "email": "kimvanna@gmail.com",
        "current_address": "ពោធិ៍បន្ទាយជ័យ សៀមរាប សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-17T07:33:35.065Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "64b5071a976db3c6a7926d33"
        },
        "working_status": "working",
        "employee_id": "00523",
        "join_date": {
            "$date": "2023-05-16T03:05:54.539Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a23"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63c6501175fc260cef30750c"
        },
        "national_id": "665638257",
        "khmer_name": {
            "first_name": "Joshua Craig \n",
            "last_name": "Smith"
        },
        "latin_name": {
            "first_name": "Joshua Craig ",
            "last_name": "Smith"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1d01b90a-b269-45fd-b594-66cbaadb89211152023jpeg.png",
            "name": "1d01b90a-b269-45fd-b594-66cbaadb89211152023jpeg.png"
        },
        "date_of_birth": "2000-06-02T07:33:35.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "American",
        "phone": "069 940 160",
        "email": "joshtsmith9010@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-17T07:36:49.072Z"
        },
        "__v": 0,
        "employee_id": "00526",
        "join_date": {
            "$date": "2023-01-18T01:36:25.175Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646486a4c072bd5316c2fa26"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a24"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63c753e975fc260cef309434"
        },
        "national_id": "180891192",
        "khmer_name": {
            "first_name": "លួ ",
            "last_name": "សុនឿន"
        },
        "latin_name": {
            "first_name": "Luo ",
            "last_name": "Sonoeurn"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5db8f5d1-9ab3-40b2-a572-b8d395a042bc0132023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-01-07T02:01:18.000Z",
        "place_of_birth": "សំរោង ខ្នារពោធិ៍ សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "071 473 9785",
        "email": "sonoeurnluo@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-18T02:05:29.405Z"
        },
        "__v": 0,
        "employee_id": "00527",
        "join_date": {
            "$date": "2023-01-18T02:06:55.295Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9fce62b4b8821e89eb3de"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63c7619775fc260cef3096be"
        },
        "national_id": "V924756654",
        "khmer_name": {
            "first_name": "បាន ",
            "last_name": "វណ្ណេ"
        },
        "latin_name": {
            "first_name": "Ban ",
            "last_name": "Vaneng"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f82a4c9f-8147-4be1-9671-3d396230f8fb0132023jpg.png",
            "name": "f82a4c9f-8147-4be1-9671-3d396230f8fb0132023jpg.png"
        },
        "date_of_birth": "2002-05-12T02:55:14.000Z",
        "place_of_birth": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "086 905 167",
        "email": "vaneng@gmail.com",
        "current_address": "ថ្មី, ស្វាយដង្គំ, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "internship",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-18T03:03:51.128Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-01-18T03:09:54.126Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63c7685b75fc260cef309900"
        },
        "national_id": "A08612167",
        "khmer_name": {
            "first_name": "ហឿន​ ",
            "last_name": "បារាំង"
        },
        "latin_name": {
            "first_name": "Hoeurn ",
            "last_name": "Barang"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/878dc60d-410c-42fc-97c4-5151be119b0a0132023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-04-13T03:13:19.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "085 461 053",
        "email": "barang@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": [
            {
                "key": {
                    "$date": "2023-03-31T08:42:57.166Z"
                },
                "start_end_date": "",
                "title": "ប.ស.ស 2000323-3072650"
            }
        ],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": [
            {
                "work_permit_name": "",
                "expire_date": {
                    "$date": "2023-03-31T08:42:46.262Z"
                },
                "key": {
                    "$date": "2023-03-31T08:42:46.262Z"
                }
            }
        ],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-18T03:32:43.146Z"
        },
        "__v": 0,
        "employee_id": "00524",
        "join_date": {
            "$date": "2023-01-18T03:33:35.864Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9fc992b4b8821e89eb355"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63cf9f3275fc260cef318085"
        },
        "national_id": "180980984",
        "khmer_name": {
            "first_name": "កើត ",
            "last_name": "រក្សា"
        },
        "latin_name": {
            "first_name": "Keut ",
            "last_name": "Reaksa"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e1c46162-dab3-4fc0-82cc-21952ffe19b70162023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2004-02-29T09:00:53.000Z",
        "place_of_birth": "ដូនស្វា ចារឈូក អង្គរជុំ សៀមរាប ",
        "nationality": "Cambodian",
        "phone": "068 368 133",
        "email": "keutreaksa@gamil.com",
        "current_address": "ដូនស្វា ចារឈូក អង្គរជុំ សៀមរាប ",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-01-24T09:04:50.058Z"
        },
        "__v": 0,
        "employee_id": "00544",
        "join_date": {
            "$date": "2023-01-28T02:18:30.655Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "644c7b536e66425986a23c1d"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63dc67328a2abb8c17fd0336"
        },
        "national_id": "A08612167",
        "khmer_name": {
            "first_name": "លន់",
            "last_name": "ជាតុន"
        },
        "latin_name": {
            "first_name": "Lon ",
            "last_name": "Cheaton"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/72ae3ccd-3078-4c0f-869e-a4139e47b5840262023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-03-04T01:43:31.000Z",
        "place_of_birth": "បឹងមាលា,​ បឹងមាលា, ស្វាយលើ,សៀមរាប\n",
        "nationality": "Cambodian",
        "phone": "071 575 5574",
        "email": "lon.cheaton10@gmail.com",
        "current_address": "តាភុល ស្វាយដង្គំ សៀមរាប​ សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-03T01:45:22.089Z"
        },
        "__v": 0,
        "employee_id": "00529",
        "join_date": {
            "$date": "2023-02-04T09:00:40.546Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9fc182b4b8821e89eb2c0"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63dc766a8a2abb8c17fd0d5c"
        },
        "national_id": "A08612167",
        "khmer_name": {
            "first_name": "សម្បត្តិ  ",
            "last_name": "ធីប"
        },
        "latin_name": {
            "first_name": "Sombath ",
            "last_name": "Thib"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f1e99ad7-084d-4152-a7d4-d062e94e89ae1052023jpeg.png",
            "name": "f1e99ad7-084d-4152-a7d4-d062e94e89ae1052023jpeg.png"
        },
        "date_of_birth": "2023-02-03T02:45:52.695Z",
        "place_of_birth": "ស្វាយដង្គំ ស្វាយដង្គំ សៀមរាប​ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "093 890 295",
        "email": "sombath@gmail.com",
        "current_address": "ស្វាយដង្គំ ស្វាយដង្គំ សៀមរាប​ សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-03T02:50:18.689Z"
        },
        "__v": 0,
        "employee_id": "00530",
        "join_date": {
            "$date": "2023-02-03T09:29:30.897Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9f36d2b4b8821e89ea4b2"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a25"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63dc7a228a2abb8c17fd0f21"
        },
        "national_id": "A08612167",
        "khmer_name": {
            "first_name": "ប៉ក់",
            "last_name": "វណ្ណដា"
        },
        "latin_name": {
            "first_name": "Pork ",
            "last_name": "Vannda"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5427f7b0-4abc-46a6-a40e-f64656fbbc471052023jpeg.png",
            "name": "5427f7b0-4abc-46a6-a40e-f64656fbbc471052023jpeg.png"
        },
        "date_of_birth": "2003-12-27T03:04:31.000Z",
        "place_of_birth": "ជ្រោយនាងងួន, ជ្រោយនាងងួន, ស្រីស្នំ, សៀមរាប\n",
        "nationality": "Cambodian",
        "phone": "087 953 529",
        "email": "vannda.nssp@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-03T03:06:10.294Z"
        },
        "__v": 0,
        "employee_id": "00563",
        "join_date": {
            "$date": "2023-02-04T09:04:03.257Z"
        },
        "work_book": false,
        "contract": null,
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a26"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63dcd1248a2abb8c17fd3baa"
        },
        "national_id": "180168027",
        "khmer_name": {
            "first_name": "ថាវ",
            "last_name": "ធីតា"
        },
        "latin_name": {
            "first_name": "Thav",
            "last_name": "Thida"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/fcaff4d5-0a9b-490e-ae2e-4fe638e7cf830252023JPG.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-02-03T09:14:17.180Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "096 831 3194",
        "email": "thavthida@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-03T09:17:24.987Z"
        },
        "__v": 0,
        "employee_id": "00528",
        "join_date": {
            "$date": "2023-02-01T09:17:25.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64b5047f976db3c6a7926536"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a27"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63e1fa8c8a2abb8c17fdfce4"
        },
        "national_id": "A08612160",
        "khmer_name": {
            "first_name": "ថាន ",
            "last_name": "ថុល"
        },
        "latin_name": {
            "first_name": "Than ",
            "last_name": "Thol"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9998abcb-d848-4f3e-84b9-b2334e8ff9fd1052023jpeg.png",
            "name": "9998abcb-d848-4f3e-84b9-b2334e8ff9fd1052023jpeg.png"
        },
        "date_of_birth": "1998-10-16T07:13:19.000Z",
        "place_of_birth": "សង្វាត ក្រយា ប្រាសាទបល្ល័ង្គ កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "088 817 2916",
        "email": "thol08890@gmail.com",
        "current_address": "បឹងដូនប៉ា ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-07T07:15:24.113Z"
        },
        "__v": 0,
        "employee_id": "00532",
        "join_date": {
            "$date": "2023-02-07T07:15:45.235Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9f2ec2b4b8821e89ea3ba"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a28"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63e5a3a48a2abb8c17feee72"
        },
        "national_id": "A08612107",
        "khmer_name": {
            "first_name": "រ៉ាន ",
            "last_name": "ជីលី"
        },
        "latin_name": {
            "first_name": "Ran ",
            "last_name": "Chily"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/fbc4fffe-8a42-4364-a37c-f52a5ef28a3f1052023jpeg.png",
            "name": "fbc4fffe-8a42-4364-a37c-f52a5ef28a3f1052023jpeg.png"
        },
        "date_of_birth": "2001-07-10T01:51:01.000Z",
        "place_of_birth": "បុស្សធំ រោងគោ ក្រឡាញ់ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 673 1855",
        "email": "chilyran@gmail.com",
        "current_address": "តាវៀន សាលារើក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-10T01:53:40.328Z"
        },
        "__v": 0,
        "contract": null,
        "working_status": "working",
        "employee_id": "00565",
        "join_date": {
            "$date": "2023-05-18T09:24:52.461Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "adminRole": "block",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a29"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63e5a45f8a2abb8c17feeee5"
        },
        "national_id": "A28612167",
        "khmer_name": {
            "first_name": "ស៊ិន ",
            "last_name": "សាម៉េត"
        },
        "latin_name": {
            "first_name": "Sin ",
            "last_name": "Sameth"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e41cde22-863e-43fd-8c1c-81594087a3f00532023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1995-07-04T01:54:05.000Z",
        "place_of_birth": "សំរោង លាងដៃ អង្គរធំ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "069 246 228",
        "email": "sinsameth97@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-10T01:56:47.711Z"
        },
        "__v": 0,
        "employee_id": "00533",
        "join_date": {
            "$date": "2023-02-10T01:56:59.213Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9f2752b4b8821e89ea2ea"
        },
        "working_status": "resign"
    },
    {
        "_id": {
            "$oid": "63e741468a2abb8c17ff5199"
        },
        "national_id": "20422160",
        "khmer_name": {
            "first_name": "យ៉ុង ",
            "last_name": "សារ៉ាវុធ"
        },
        "latin_name": {
            "first_name": "Yong ",
            "last_name": "Saravuth"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e4a4f3f9-03e0-424b-b3bd-3da5f25edcc00252023jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1981-12-12T07:01:45.000Z",
        "place_of_birth": "តាកែវទី១ វិហារសួគ៌ ខ្សាច់កណ្ដាល កណ្ដាល",
        "nationality": "Cambodian",
        "phone": "086 584 070",
        "email": "saravuth@gmail.com",
        "current_address": "គោកជួន ពួក ពួក សៀមរាប",
        "role": "employee",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-11T07:18:30.084Z"
        },
        "__v": 0,
        "employee_id": "00535",
        "join_date": {
            "$date": "2023-02-11T07:19:56.711Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9efb02b4b8821e89e9d2b"
        },
        "working_status": "working",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a2a"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63e99a941a6f28d8a9715b85"
        },
        "national_id": "180716398",
        "khmer_name": {
            "first_name": "ខង ",
            "last_name": "ចំប៉ី"
        },
        "latin_name": {
            "first_name": "Khorng ",
            "last_name": "Champey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1c191ac7-b94a-4df2-9ebf-bd77f07a4c891052023jpeg.png",
            "name": "1c191ac7-b94a-4df2-9ebf-bd77f07a4c891052023jpeg.png"
        },
        "date_of_birth": "1998-09-08T02:01:56.000Z",
        "place_of_birth": "ត្រាង កណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 221 4314",
        "email": "khorngchampey0809@gmail.com",
        "current_address": "ត្រាង កណ្ដែក ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-13T02:04:04.837Z"
        },
        "__v": 0,
        "employee_id": "00536",
        "join_date": {
            "$date": "2023-02-13T02:36:14.390Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9f1f82b4b8821e89ea22d"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a2b"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63e99b1d1a6f28d8a9715bf2"
        },
        "national_id": "180906536",
        "khmer_name": {
            "first_name": "វឿន ",
            "last_name": "ហន"
        },
        "latin_name": {
            "first_name": "Voeun ",
            "last_name": "Hon"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/affbce5f-c94b-4814-bb08-d3b01555120a1052023jpeg.png",
            "name": "affbce5f-c94b-4814-bb08-d3b01555120a1052023jpeg.png"
        },
        "date_of_birth": "2001-01-11T02:04:25.000Z",
        "place_of_birth": "ដំរីស្លាប់ ចន្លាស់ដៃ ក្រឡាញ់ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "016 743 558",
        "email": "voeun.hon@pucsr.edu.kh",
        "current_address": "វត្តស្វាយ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-13T02:06:21.543Z"
        },
        "__v": 0,
        "employee_id": "00537",
        "join_date": {
            "$date": "2023-02-13T02:32:44.190Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63e9f1952b4b8821e89ea161"
        },
        "working_status": "working",
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a2c"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63ec3d06fd309a78f99ec316"
        },
        "national_id": "180883931",
        "khmer_name": {
            "first_name": "កៀន ",
            "last_name": "សាម៉ុន"
        },
        "latin_name": {
            "first_name": "Kien ",
            "last_name": "Samon"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/532aa336-ce07-4d6c-ad7e-9a390f119a651052023jpeg.png",
            "name": "532aa336-ce07-4d6c-ad7e-9a390f119a651052023jpeg.png"
        },
        "date_of_birth": "1972-09-15T01:45:45.000Z",
        "place_of_birth": "គោកស្នួល ខ្នាត ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "085 675 681",
        "email": "samon@gmail.com",
        "current_address": "គោកស្នួល ខ្នាត ពួក សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-15T02:01:42.288Z"
        },
        "__v": 0,
        "employee_id": "00538",
        "join_date": {
            "$date": "2023-02-15T03:00:31.313Z"
        },
        "work_book": false,
        "working_status": "working",
        "contract": {
            "$oid": "64b50626976db3c6a7926984"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a2d"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63eda20ffd309a78f99f6248"
        },
        "national_id": "181071125",
        "khmer_name": {
            "first_name": "នើយ ",
            "last_name": "សាគីម"
        },
        "latin_name": {
            "first_name": "Nery ",
            "last_name": "Sakim"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1b2c2636-e3ed-4f85-b770-669e965748b91052023jpeg.png",
            "name": "1b2c2636-e3ed-4f85-b770-669e965748b91052023jpeg.png"
        },
        "date_of_birth": "2006-02-06T03:17:33.000Z",
        "place_of_birth": "ឈូក ត្រីញ័រ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "068 682 376",
        "email": "sakimnery0522@gmail.com",
        "current_address": "ជ្រាវ ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-16T03:25:03.448Z"
        },
        "__v": 0,
        "employee_id": "00539",
        "join_date": {
            "$date": "2023-02-16T03:25:18.018Z"
        },
        "work_book": false,
        "working_status": "resign",
        "contract": {
            "$oid": "63f32e5fd05c79e78538b53d"
        },
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "63eda309fd309a78f99f6363"
        },
        "national_id": "180990522\n",
        "khmer_name": {
            "first_name": "ប៉ែន ",
            "last_name": "សូលីកា"
        },
        "latin_name": {
            "first_name": "Pen ",
            "last_name": "Solika"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/da627a70-3895-449b-90cd-1b2ea1068a4f0242023JPG.png",
            "name": "da627a70-3895-449b-90cd-1b2ea1068a4f0242023JPG.png"
        },
        "date_of_birth": "2004-09-17T03:25:32.000Z",
        "place_of_birth": "ក្រសាំង ជ្រាវ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "061 667 074",
        "email": "solika@gmail.com",
        "current_address": "ក្រសាំង ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-16T03:29:13.687Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-02-16T03:29:24.581Z"
        },
        "work_book": false,
        "working_status": "resign",
        "contract": {
            "$oid": "63f322b3d05c79e78538a370"
        }
    },
    {
        "_id": {
            "$oid": "63f31807d05c79e785389b59"
        },
        "national_id": "00105",
        "khmer_name": {
            "first_name": "លឿម",
            "last_name": "សួយ"
        },
        "latin_name": {
            "first_name": "Loeurm",
            "last_name": "Suoy "
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/dd951998-facc-4ca1-b7b8-0137ec779cd61052023jpeg.png",
            "name": "dd951998-facc-4ca1-b7b8-0137ec779cd61052023jpeg.png"
        },
        "date_of_birth": "2023-02-20T06:42:25.143Z",
        "place_of_birth": "វត្តស្វាយ សាលាកំរើក សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 990 1268",
        "email": "suoy.ssp2020@gmail.com",
        "current_address": "វត្តស្វាយ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-20T06:49:43.418Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "63f320ead05c79e78538a2a0"
        },
        "employee_id": "00541",
        "join_date": {
            "$date": "2023-02-20T08:13:51.152Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a2e"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63f582460ed27e5e818782d1"
        },
        "national_id": "00022",
        "khmer_name": {
            "first_name": "ជក់ ",
            "last_name": "ពាម"
        },
        "latin_name": {
            "first_name": "Cauok ",
            "last_name": "Peam"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ffcda77c-8d29-4c2b-894d-0683240f78bd1052023jpeg.png",
            "name": "ffcda77c-8d29-4c2b-894d-0683240f78bd1052023jpeg.png"
        },
        "date_of_birth": "2023-02-22T02:45:16.402Z",
        "place_of_birth": "ធ្វាស ត្រីញ័រ ពួក សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "060 646 146",
        "email": "peam@gmail.com",
        "current_address": "ជ្រាវ ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-22T02:47:34.755Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "63f58b010ed27e5e81878946"
        },
        "employee_id": "00566",
        "join_date": {
            "$date": "2023-02-23T01:52:28.544Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a2f"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "63f6c5320ed27e5e8187ec9e"
        },
        "national_id": "00023",
        "khmer_name": {
            "first_name": "អោត ",
            "last_name": "រត់"
        },
        "latin_name": {
            "first_name": "Ot  ",
            "last_name": "Rot"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/534969c2-2113-4eb0-a5c2-00147f95bf2e0242023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2001-10-10T01:43:29.000Z",
        "place_of_birth": "វត្តដំណាក់ សាលាកំរើក សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "081 704 417",
        "email": "mrroth2025@gmail.com",
        "current_address": "វត្តដំណាក់ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-23T01:45:22.738Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "63f6c5cf0ed27e5e8187ecf7"
        },
        "employee_id": "00542",
        "join_date": {
            "$date": "2023-02-23T06:36:39.291Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "63f70aeb0ed27e5e81880dc9"
        },
        "national_id": "181008082",
        "khmer_name": {
            "first_name": "អ៊ុន",
            "last_name": "អ៊ូជី"
        },
        "latin_name": {
            "first_name": "Oun ",
            "last_name": "Ouchy"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/c3944262-a9c9-4b4f-9840-73eea7a757e31052023jpeg.png",
            "name": "c3944262-a9c9-4b4f-9840-73eea7a757e31052023jpeg.png"
        },
        "date_of_birth": "2004-05-28T06:39:03.000Z",
        "place_of_birth": "ដូនទ្រ ល្វា ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 910 5269",
        "email": "ouchyoun009@gmail.com",
        "current_address": "ដូនទ្រ ល្វា ពួក សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-02-23T06:42:51.630Z"
        },
        "__v": 0,
        "employee_id": "00567",
        "join_date": {
            "$date": "2023-02-24T06:45:16.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "63f70c7f0ed27e5e81880e5c"
        },
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "640597d6851622a98834f58f"
        },
        "national_id": "127042143",
        "khmer_name": {
            "first_name": "Natasha Jay",
            "last_name": "O'neil "
        },
        "latin_name": {
            "first_name": "Natasha Jay",
            "last_name": "O'neil  "
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/eeae79d8-dbd4-4d22-9692-1f0a6aa9d05e0322023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1990-12-07T07:31:11.000Z",
        "place_of_birth": "America",
        "nationality": "American Samoan",
        "phone": "096 361 2161",
        "email": "Natasha.J7@hotmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-06T07:35:50.619Z"
        },
        "__v": 0,
        "employee_id": "00547",
        "join_date": {
            "$date": "2023-03-07T09:31:34.582Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "640705092874346224a4dfeb"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a30"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "64059b17851622a98834f7ed"
        },
        "national_id": "180844899",
        "khmer_name": {
            "first_name": "សាង​ ",
            "last_name": "សុឃីម"
        },
        "latin_name": {
            "first_name": "Sang ",
            "last_name": "Sokhim"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/228445a5-162d-412b-812a-5a25ddc0abe81052023jpeg.png",
            "name": "228445a5-162d-412b-812a-5a25ddc0abe81052023jpeg.png"
        },
        "date_of_birth": "2000-10-01T07:45:31.000Z",
        "place_of_birth": "បឹង ជ្រាវ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "093 317 948",
        "email": "sangsokhim2000@gmail.com",
        "current_address": "បឹង ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-06T07:49:43.497Z"
        },
        "__v": 0,
        "employee_id": "00549",
        "join_date": {
            "$date": "2023-03-06T08:41:42.495Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6405b217f464c6fcfecab48d"
        },
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "6405a8b6f464c6fcfecaab39"
        },
        "national_id": "150830065",
        "khmer_name": {
            "first_name": "ចូច ",
            "last_name": "វរល័ក្ខ"
        },
        "latin_name": {
            "first_name": "Choch ",
            "last_name": "Vorlek"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/e054954a-e757-4171-b08b-bf54f54496820312023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2000-11-05T08:45:37.000Z",
        "place_of_birth": "ងួនសៀម​ កំពង់ចិនខាងត្បូង ស្ទោង កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "085 461 053",
        "email": "chochvorlek856@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-06T08:47:50.633Z"
        },
        "__v": 0,
        "employee_id": "00548",
        "join_date": {
            "$date": "2023-03-06T09:21:07.990Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6405b1c6f464c6fcfecab40a"
        },
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "6405a92cf464c6fcfecaabd1"
        },
        "national_id": "125468589",
        "khmer_name": {
            "first_name": "តិម ",
            "last_name": "ស៊ីន"
        },
        "latin_name": {
            "first_name": "Tim",
            "last_name": "Sin"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f672dfce-b72e-46c7-abd4-0e2b22cc5c091052023jpeg.png",
            "name": "f672dfce-b72e-46c7-abd4-0e2b22cc5c091052023jpeg.png"
        },
        "date_of_birth": "2001-03-17T08:47:35.000Z",
        "place_of_birth": "ខ្នារត្បូង ក្រូចគរ ក្រឡាញ់ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 483 8344",
        "email": "sintim354@gmail.com",
        "current_address": "បន្ទាយចាស់ ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": [
            {
                "key": {
                    "$date": "2023-03-31T09:56:30.242Z"
                },
                "start_end_date": "",
                "title": "ប.ស.ស 1010323-3072652-គ"
            }
        ],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-06T08:49:48.538Z"
        },
        "__v": 0,
        "employee_id": "00550",
        "join_date": {
            "$date": "2023-03-06T08:59:37.364Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6405b251f464c6fcfecab4cf"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a31"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6405a9bdf464c6fcfecaac79"
        },
        "national_id": "180510994",
        "khmer_name": {
            "first_name": "ដឿន ",
            "last_name": "ដា"
        },
        "latin_name": {
            "first_name": "Doeurn ",
            "last_name": "Da"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/327d64e8-07d7-4dd7-bfdc-7ff22fefe9b90312023jpg.png",
            "name": "327d64e8-07d7-4dd7-bfdc-7ff22fefe9b90312023jpg.png"
        },
        "date_of_birth": "1995-09-03T08:49:40.000Z",
        "place_of_birth": "តាប្រុក លាងដៃ អង្គរធំ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "098 491 716",
        "email": "doeurnda@gmail.com",
        "current_address": "ពាក់ស្នែងថ្មី ពាក់ស្នែង អង្គរធំ សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-06T08:52:13.147Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-03-06T08:54:12.762Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6405b15ff464c6fcfecab39d"
        }
    },
    {
        "_id": {
            "$oid": "640940d9e80d162e3e37680a"
        },
        "national_id": "00551",
        "khmer_name": {
            "first_name": "ពុធ ",
            "last_name": "ច័ន្ទលក្ម្សី"
        },
        "latin_name": {
            "first_name": "Puth ",
            "last_name": "Chanlaksmey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/defa989a-9006-4a4a-838a-504045a2f2e51052023jpeg.png",
            "name": "defa989a-9006-4a4a-838a-504045a2f2e51052023jpeg.png"
        },
        "date_of_birth": "1990-10-12T01:54:50.000Z",
        "place_of_birth": "កំពង់ធំ",
        "nationality": "Cambodian",
        "phone": "015 827 788",
        "email": "laksmey.smart@gmail.com",
        "current_address": "ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-09T02:13:45.728Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "6409416ce80d162e3e376873"
        },
        "employee_id": "00551",
        "join_date": {
            "$date": "2023-03-09T02:21:03.705Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a32"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "640a87b815749ef088040b10"
        },
        "national_id": "180867529",
        "khmer_name": {
            "first_name": "អៀង ",
            "last_name": "សុម៉ាវត្តី"
        },
        "latin_name": {
            "first_name": "Eang ",
            "last_name": "Somavatey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/70c04ac6-0037-4814-9f7d-a516d848d2f20352023jpg.png",
            "name": "70c04ac6-0037-4814-9f7d-a516d848d2f20352023jpg.png"
        },
        "date_of_birth": "2023-03-10T01:00:55.324Z",
        "place_of_birth": "បន្ទាយចាស់ ស្លក្រាម សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077 274 495",
        "email": "eangsomavatey83@gmail.com",
        "current_address": "បន្ទាយចាស់ ស្លក្រាម សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-10T01:28:24.138Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-03-10T01:30:51.223Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "640a890515749ef088040c2a"
        },
        "takingPhoto": "notTake"
    },
    {
        "_id": {
            "$oid": "6413e9d563e5a32d855c1fa6"
        },
        "national_id": "180894649",
        "khmer_name": {
            "first_name": "តុត ",
            "last_name": "ឆៃ"
        },
        "latin_name": {
            "first_name": "Tot ",
            "last_name": "Chhai"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/2512b521-1e25-4e8e-b8c1-ae8e96d3c3241052023jpeg.png",
            "name": "2512b521-1e25-4e8e-b8c1-ae8e96d3c3241052023jpeg.png"
        },
        "date_of_birth": "1995-01-10T04:15:19.000Z",
        "place_of_birth": "ដូននំ មានជ័យ ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "092 628 244",
        "email": "chhai@gmail.com",
        "current_address": "ស្ពានជ្រាវ សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-17T04:17:25.775Z"
        },
        "__v": 0,
        "employee_id": "00552",
        "join_date": {
            "$date": "2023-03-17T04:17:43.215Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64140b0d63e5a32d855c2ac6"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a33"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6425070758d517239fee6388"
        },
        "national_id": "180762660",
        "khmer_name": {
            "first_name": "សៀង ",
            "last_name": "ភាក់ត្រា"
        },
        "latin_name": {
            "first_name": "Seing ",
            "last_name": "Pheaktra"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/2f4d52dd-f85b-4819-a972-40978c5cadbe0422023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1998-04-10T03:47:25.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "070 277 190",
        "email": "siengpheaktra3@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-30T03:50:31.624Z"
        },
        "__v": 0,
        "employee_id": "00553",
        "join_date": {
            "$date": "2023-04-18T02:09:37.617Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "643e033698eeeb1343aef337"
        }
    },
    {
        "_id": {
            "$oid": "6425081558d517239fee645d"
        },
        "national_id": "180930007",
        "khmer_name": {
            "first_name": "សយ ",
            "last_name": "ស្រីថូ"
        },
        "latin_name": {
            "first_name": "Soy ",
            "last_name": "Sreytho"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0593e3fa-99f4-43e6-9a90-25e712e4d8a61052023jpeg.png",
            "name": "0593e3fa-99f4-43e6-9a90-25e712e4d8a61052023jpeg.png"
        },
        "date_of_birth": "2001-12-10T03:50:59.000Z",
        "place_of_birth": "Siem Reap",
        "nationality": "Cambodian",
        "phone": "067 936 397",
        "email": "sreytho@gmail.com",
        "current_address": "Siem Reap",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-03-30T03:55:01.529Z"
        },
        "__v": 0,
        "employee_id": "00554",
        "join_date": {
            "$date": "2023-04-18T02:13:10.737Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "643e03a198eeeb1343aef3aa"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a34"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "644655ce5503c31bb697b006"
        },
        "national_id": "180803354",
        "khmer_name": {
            "first_name": "ថុន",
            "last_name": "ប៊ុនថន"
        },
        "latin_name": {
            "first_name": "Thon",
            "last_name": "Bunthorn"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/21789caa-97ed-4de3-ac36-d96d4f9e63c01052023jpeg.png",
            "name": "21789caa-97ed-4de3-ac36-d96d4f9e63c01052023jpeg.png"
        },
        "date_of_birth": "2023-04-24T10:08:45.892Z",
        "place_of_birth": "គោកតាចន្ទ គោកចក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "099 370 773",
        "email": "thonbunthorn77@gmail.com",
        "current_address": "គោកតាចន្ទ គោកចក សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "internship",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-04-24T10:11:26.131Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "644656cf5503c31bb697b0cb"
        },
        "employee_id": "00575",
        "join_date": {
            "$date": "2023-04-24T10:16:15.901Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a35"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "64489f3bf46f12aef7c6dc2c"
        },
        "national_id": "190952612",
        "khmer_name": {
            "first_name": "ភន",
            "last_name": "សៀវអ៊ិញ"
        },
        "latin_name": {
            "first_name": "Phon ",
            "last_name": "Seavinh"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/45d6d03a-0642-4243-813e-d26d50372b281052023jpeg.png",
            "name": "45d6d03a-0642-4243-813e-d26d50372b281052023jpeg.png"
        },
        "date_of_birth": "2004-09-02T03:35:40.000Z",
        "place_of_birth": "គោកទ្រាស ឈ្នួរមានជ័យ ព្រះនេត្រព្រះ បន្ទាយមានជ័យ",
        "nationality": "Cambodian",
        "phone": "090 922 574",
        "email": "phonseavinh@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-04-26T03:49:15.795Z"
        },
        "__v": 0,
        "employee_id": "00556",
        "join_date": {
            "$date": "2023-04-26T03:53:56.389Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6448a119f46f12aef7c6dd61"
        },
        "takingPhoto": "taked"
    },
    {
        "_id": {
            "$oid": "6449fca3f46f12aef7c7339c"
        },
        "national_id": "180962184",
        "khmer_name": {
            "first_name": "ធួក ",
            "last_name": "ម្លិះ"
        },
        "latin_name": {
            "first_name": "Thouk ",
            "last_name": "Malis"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/8175561b-9098-4ec5-bbcb-f76007a0e6ff1052023jpeg.png",
            "name": "8175561b-9098-4ec5-bbcb-f76007a0e6ff1052023jpeg.png"
        },
        "date_of_birth": "2002-08-01T04:33:01.000Z",
        "place_of_birth": "កញ្ជរ រលួស ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "099 554 796/ 088 546 4992",
        "email": "thoukmalis@gmail.com",
        "current_address": "កញ្ជរ រលួស ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-04-27T04:40:03.245Z"
        },
        "__v": 0,
        "employee_id": "00557",
        "join_date": {
            "$date": "2023-04-27T04:40:44.270Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "644a2bccf46f12aef7c76a4d"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a36"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "644b43346e66425986a1b896"
        },
        "national_id": "180727610",
        "khmer_name": {
            "first_name": "គង់ ",
            "last_name": "សិក"
        },
        "latin_name": {
            "first_name": "Kong ",
            "last_name": "Sek"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/66bf8e8e-f1a2-42d3-813e-120083579e750452023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "1971-01-01T03:51:28.000Z",
        "place_of_birth": "អំពិលពាម, ខ្នាត, ពួក, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "095 418 136",
        "email": "kongsek@gmail.com",
        "current_address": "អំពិលពាម, ខ្នាត, ពួក, សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-04-28T03:53:24.042Z"
        },
        "__v": 0,
        "employee_id": "00558",
        "join_date": {
            "$date": "2023-04-28T03:53:34.465Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "644b43bc6e66425986a1b9bc"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a37"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "644cba4f6e66425986a25683"
        },
        "national_id": "180710593",
        "khmer_name": {
            "first_name": "វ៉ុន ",
            "last_name": "ចង្រិត"
        },
        "latin_name": {
            "first_name": "Voun ",
            "last_name": "Cangreth"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7812a722-4777-4d5b-9aa3-a2c12c85c0fa1052023jpeg.png",
            "name": "7812a722-4777-4d5b-9aa3-a2c12c85c0fa1052023jpeg.png"
        },
        "date_of_birth": "1995-08-09T06:31:44.000Z",
        "place_of_birth": "គោកស្នួល ខ្នាត ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 960 1013",
        "email": "cangreth@gmail.com",
        "current_address": "គោកស្នួល ខ្នាត ពួក សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-04-29T06:33:51.621Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "644cbacb6e66425986a2572a"
        },
        "employee_id": "00559",
        "join_date": {
            "$date": "2023-05-02T07:10:45.217Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a38"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6450b8276e66425986a2e23e"
        },
        "national_id": "181002110",
        "khmer_name": {
            "first_name": "ថឹក ",
            "last_name": "ស្រីណយ"
        },
        "latin_name": {
            "first_name": "Therk ",
            "last_name": "Sreynoy"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5751fb3f-cdb9-457e-967a-79c1d1aabb430522023jpg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2001-06-24T07:11:21.000Z",
        "place_of_birth": "ទឹកថ្លា ទឹកវិល សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "092 323 857",
        "email": "sreynoy@gmail.com",
        "current_address": "ខ្នារ ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-05-02T07:13:43.730Z"
        },
        "__v": 0,
        "employee_id": "00560",
        "join_date": {
            "$date": "2023-05-02T07:14:41.533Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6450bc446e66425986a2e606"
        }
    },
    {
        "_id": {
            "$oid": "6450ba4a6e66425986a2e3ae"
        },
        "national_id": "0205",
        "khmer_name": {
            "first_name": "យិន ",
            "last_name": "ច័ន្ទអូន"
        },
        "latin_name": {
            "first_name": "Yin ",
            "last_name": "Chanoun"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/cfe40d9a-0ab4-47e8-a788-675ba4d266a41052023jpeg.png",
            "name": "cfe40d9a-0ab4-47e8-a788-675ba4d266a41052023jpeg.png"
        },
        "date_of_birth": "1971-07-12T07:20:07.000Z",
        "place_of_birth": "ស្ទឹងថ្មី សៀមរាប សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 960 1013",
        "email": "chanoun@gmail.com",
        "current_address": "ស្ទឹងថ្មី សៀមរាប សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-05-02T07:22:50.052Z"
        },
        "__v": 0,
        "employee_id": "00561",
        "join_date": {
            "$date": "2023-05-02T07:23:42.181Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6450bb366e66425986a2e40a"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a39"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6451e30d6e66425986a35250"
        },
        "national_id": "30976600",
        "khmer_name": {
            "first_name": "ហេង ",
            "last_name": "ម៉ៅ"
        },
        "latin_name": {
            "first_name": "Heng ",
            "last_name": "Mao"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/21300f4c-6430-45ee-968d-5c34838eb0441052023jpeg.png",
            "name": "21300f4c-6430-45ee-968d-5c34838eb0441052023jpeg.png"
        },
        "date_of_birth": "1979-02-12T04:26:35.000Z",
        "place_of_birth": "ទី១ កោះចេក ពាមជរ ​ព្រៃវែង​",
        "nationality": "Cambodian",
        "phone": "016 918 936",
        "email": "hengmao@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-05-03T04:29:01.714Z"
        },
        "__v": 0,
        "employee_id": "00562",
        "join_date": {
            "$date": "2023-05-03T04:29:21.669Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6451e3ea6e66425986a353ca"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a3a"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6461f4f55a1006e30e56c00a"
        },
        "national_id": "0205",
        "khmer_name": {
            "first_name": "ឡំ ",
            "last_name": "វល័ក្ខ"
        },
        "latin_name": {
            "first_name": "Lom ",
            "last_name": "Voleak"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0068a11e-a372-43a2-8dd8-066ca86584821052023jpeg.png",
            "name": "0068a11e-a372-43a2-8dd8-066ca86584821052023jpeg.png"
        },
        "date_of_birth": "2002-04-25T09:00:37.000Z",
        "place_of_birth": "គោកស្នួល ខ្នាត ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077 233 596",
        "email": "lomvoleak@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-05-15T09:01:41.043Z"
        },
        "__v": 0,
        "employee_id": "00564",
        "join_date": {
            "$date": "2023-05-15T09:07:33.764Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6461f6b45a1006e30e56c2cd"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a3b"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "646ae1a538d31ba2fce72ac7"
        },
        "national_id": "180939925",
        "khmer_name": {
            "first_name": "ចន ",
            "last_name": "មី"
        },
        "latin_name": {
            "first_name": "Chorn ",
            "last_name": "Mi"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ba8697e7-1d57-4f0c-89b9-4719e99015d71042023jpeg.png",
            "name": "ba8697e7-1d57-4f0c-89b9-4719e99015d71042023jpeg.png"
        },
        "date_of_birth": "2001-11-07T03:24:38.000Z",
        "place_of_birth": "ស្វាយចន្ទរ​ ព្រៃជ្រូក ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 387 2401",
        "email": "johnrami0978@gmail.com",
        "current_address": "ស្វាយដង្គំ ស្វាយដង្គំ សៀមរាប​ សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-05-22T03:29:41.581Z"
        },
        "__v": 0,
        "employee_id": "00568",
        "join_date": {
            "$date": "2023-05-22T03:29:51.470Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "646ae21938d31ba2fce72b17"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a3c"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6474142938d31ba2fceaa1d3"
        },
        "national_id": "180853687",
        "khmer_name": {
            "first_name": " ស៊ឹម ",
            "last_name": "ម៉ាឡុក"
        },
        "latin_name": {
            "first_name": "Soem ",
            "last_name": "Malok"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/df6b20fe-eea1-4272-a446-5b11f9ea5fb31052023jpeg.png",
            "name": "df6b20fe-eea1-4272-a446-5b11f9ea5fb31052023jpeg.png"
        },
        "date_of_birth": "1989-01-18T02:45:41.000Z",
        "place_of_birth": "ប្រដាក់ ព្រៃជ្រូក ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "017 400 544",
        "email": "malok123@gmail.com",
        "current_address": "ប្រដាក់ ព្រៃជ្រូក ពួក សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-05-29T02:55:37.929Z"
        },
        "__v": 0,
        "employee_id": "00569",
        "join_date": {
            "$date": "2023-05-29T02:56:54.857Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "647415eb38d31ba2fceaa2a0"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a3d"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "64785afd38d31ba2fcebecea"
        },
        "national_id": "570",
        "khmer_name": {
            "first_name": "ឆ្លាម",
            "last_name": "ខួច"
        },
        "latin_name": {
            "first_name": "Chhlam",
            "last_name": "Khouch"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/34599c4b-d040-4d01-a771-2d47e0b980b20642023jpeg.png",
            "name": "Employee Profile"
        },
        "date_of_birth": "2023-06-01T08:35:57.015Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "Cambodian",
        "phone": "061 442 614",
        "email": "chhlam.khouch.sr@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-06-01T08:46:53.107Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "64785bcc38d31ba2fcebed56"
        },
        "employee_id": "570",
        "join_date": {
            "$date": "2023-06-01T08:53:24.194Z"
        },
        "work_book": false,
        "takingPhoto": "notTake"
    },
    {
        "_id": {
            "$oid": "64795aa338d31ba2fcec2057"
        },
        "national_id": "180865275",
        "khmer_name": {
            "first_name": "ស៊ាំង",
            "last_name": "ពន្លឺ"
        },
        "latin_name": {
            "first_name": "Saeng",
            "last_name": "Ponlue"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/df9336c5-d6b9-4b72-870c-2b0a556057801042023jpeg.png",
            "name": "df9336c5-d6b9-4b72-870c-2b0a556057801042023jpeg.png"
        },
        "date_of_birth": "2000-10-13T02:51:25.000Z",
        "place_of_birth": "ទំរឹង រើល ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "095 936 379",
        "email": "saengponlue@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-06-02T02:57:39.130Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "64795b5238d31ba2fcec20e9"
        },
        "employee_id": "00573",
        "join_date": {
            "$date": "2023-06-22T08:39:15.942Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a3e"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "647e7e2d60a7afa9ea26f473"
        },
        "national_id": "572",
        "khmer_name": {
            "first_name": "ដូវ",
            "last_name": "ចាន់ណា"
        },
        "latin_name": {
            "first_name": "Dov",
            "last_name": "Channa"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/3f42ccf4-24ac-4b8b-9b72-b119dc4130631052023jpeg.png",
            "name": "3f42ccf4-24ac-4b8b-9b72-b119dc4130631052023jpeg.png"
        },
        "date_of_birth": "2004-07-07T00:26:17.000Z",
        "place_of_birth": "ស្វាយ ស ស្វាយ ស វ៉ារិន សៀមរាប",
        "nationality": "Cambodian",
        "phone": "088 526 449",
        "email": "dov.channa@pusr.edu.kh",
        "current_address": "សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-06-06T00:30:37.673Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "647e81e960a7afa9ea26f8bf"
        },
        "employee_id": "00572",
        "join_date": {
            "$date": "2023-06-06T07:12:30.278Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a3f"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "647e806160a7afa9ea26f73e"
        },
        "national_id": "571",
        "khmer_name": {
            "first_name": "មួន ",
            "last_name": "ស្រីពៅ"
        },
        "latin_name": {
            "first_name": "Muon ",
            "last_name": "Sreypov"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/80b495f9-a50a-471d-b66c-e23325ba06e31052023jpeg.png",
            "name": "80b495f9-a50a-471d-b66c-e23325ba06e31052023jpeg.png"
        },
        "date_of_birth": "1995-09-18T00:31:49.000Z",
        "place_of_birth": "ភូមិគោកក្រសាំង ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "078 46 53 49",
        "email": "Muonsreypov@gmail.com",
        "current_address": "ភូមិគោកក្រសាំង ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-06-06T00:40:01.809Z"
        },
        "__v": 0,
        "employee_id": "00571",
        "join_date": {
            "$date": "2023-06-06T06:51:47.696Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "647eda8560a7afa9ea27562a"
        },
        "takingPhoto": "taked",
        "adminRole": "admin",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a40"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6486dc4406bedf506f132d5b"
        },
        "national_id": "00574",
        "khmer_name": {
            "first_name": "អេង",
            "last_name": "ជូឡា"
        },
        "latin_name": {
            "first_name": "Eng",
            "last_name": "Choula"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/7f273135-ff7b-42f7-bf7f-02392b592f010612023JPG.png",
            "name": "7f273135-ff7b-42f7-bf7f-02392b592f010612023JPG.png"
        },
        "date_of_birth": "2002-10-10T08:43:53.000Z",
        "place_of_birth": "គោគពោធិ៍ ពួក សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 878 4207",
        "email": "engchoula@gmail.com",
        "current_address": "កែវព័ំណ៌ ពួក សៀមរាប ​សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-06-12T08:50:12.863Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-06-12T08:54:18.857Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "6487ecb9fae8aef256dae8a8"
        },
        "takingPhoto": "notTake"
    },
    {
        "_id": {
            "$oid": "64a381cd01ad817594e7f7aa"
        },
        "national_id": "190911172",
        "khmer_name": {
            "first_name": "សេង",
            "last_name": "ស្រីពេជ្រ"
        },
        "latin_name": {
            "first_name": "Seng",
            "last_name": "Sreypech"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/f4ba3e6f-65c2-4d04-8764-d3fcd50598941042023jpeg.png",
            "name": "f4ba3e6f-65c2-4d04-8764-d3fcd50598941042023jpeg.png"
        },
        "date_of_birth": "2002-08-08T02:15:40.000Z",
        "place_of_birth": "សង្កាត់ស្លក្រាម សៀមរាប សៀមរាប ",
        "nationality": "Cambodian",
        "phone": "096 479 7467",
        "email": "sengsreypech2002@gmail.com",
        "current_address": "វត្តបូព៌ សាលាកំរើក សៀមរាប ​សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "internship",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-07-04T02:19:57.951Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "64a3827e01ad817594e7f807"
        },
        "employee_id": "00574",
        "join_date": {
            "$date": "2023-07-17T07:12:47.422Z"
        },
        "work_book": false,
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a41"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "64e02b1b8e148b6231fa71d6"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "ហ៊ុន",
            "last_name": "ស្រីជុំ"
        },
        "latin_name": {
            "first_name": "Hun",
            "last_name": "SreyChoum"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/62da30b9-4a36-428e-9ece-5fc1c1c8d0780862023jpeg.png",
            "name": "62da30b9-4a36-428e-9ece-5fc1c1c8d0780862023jpeg.png"
        },
        "date_of_birth": "1987-06-02T02:24:19.000Z",
        "place_of_birth": "ភូមិពោធិ៍បុស្ស ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "081 930 716",
        "email": "sreychoum@hetmail.com",
        "current_address": "ភូមិពោធិ៍បុស្ស ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-08-19T02:38:19.475Z"
        },
        "__v": 0,
        "employee_id": "00576",
        "join_date": {
            "$date": "2023-08-19T02:54:21.834Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64e031678e148b6231fa7f66"
        },
        "takingPhoto": "notTake",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a42"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "64e462d18e148b6231fe489a"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "តាំង",
            "last_name": "គីមយី"
        },
        "latin_name": {
            "first_name": "Taing",
            "last_name": "Kimyi"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/3961da2e-fbe3-48a2-b6fb-4ceab37f23830822023jpeg.png",
            "name": "3961da2e-fbe3-48a2-b6fb-4ceab37f23830822023jpeg.png"
        },
        "date_of_birth": "2003-10-04T07:19:58.000Z",
        "place_of_birth": "អូរចារ អូរចារ បាត់ដំបង បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "092 205 045",
        "email": "Kimyitaing203@gmail.com",
        "current_address": "ខ្នារ ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "suspend",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-08-22T07:25:05.681Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-08-22T07:26:22.229Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "64e4644a8e148b6231fe4ce5"
        },
        "takingPhoto": "notTake",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a43"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6502ae5e69065497f0d5e9b1"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "ហ៊ន់",
            "last_name": "ស្រីភ័ក្រ"
        },
        "latin_name": {
            "first_name": "Houn",
            "last_name": "Sreypheak"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/393caab0-ad00-45cd-8db0-71671498f2590932023jpeg.png",
            "name": "393caab0-ad00-45cd-8db0-71671498f2590932023jpeg.png"
        },
        "date_of_birth": "1993-12-18T06:48:34.000Z",
        "place_of_birth": " ភ្ញាជ័យ ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "071 34 15 379",
        "email": "sreypheak@gmail.com",
        "current_address": "ភ្ញាជ័យ ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-09-14T06:55:26.627Z"
        },
        "__v": 0,
        "employee_id": "00578",
        "join_date": {
            "$date": "2023-09-14T06:56:27.089Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "650a4f46a370502acaab8eb2"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a44"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "650a71f8a370502acaac5c5d"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "ពុំ ",
            "last_name": "សុវី"
        },
        "latin_name": {
            "first_name": "Pum",
            "last_name": "Sokvy"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5cf85695-5584-4839-b989-0203c4e740390932023jpeg.png",
            "name": "5cf85695-5584-4839-b989-0203c4e740390932023jpeg.png"
        },
        "date_of_birth": "2003-11-11T03:59:31.000Z",
        "place_of_birth": "ជ្រាវ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 37 37 867",
        "email": "sokvy0060@gmail.com",
        "current_address": "ខ្នារ ជ្រាវ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "staff",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-09-20T04:15:52.447Z"
        },
        "__v": 0,
        "employee_id": "00579",
        "join_date": {
            "$date": "2023-09-20T04:26:45.796Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "650aa455a370502acaacee31"
        },
        "takingPhoto": "taked",
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a45"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "650a98daa370502acaacaaf0"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "ជា",
            "last_name": "សំណាង"
        },
        "latin_name": {
            "first_name": "Chea",
            "last_name": "Samnang"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ca182d92-0da9-4004-a836-7cbc9a0f20c70932023jpeg.png",
            "name": "ca182d92-0da9-4004-a836-7cbc9a0f20c70932023jpeg.png"
        },
        "date_of_birth": "2000-06-25T06:54:07.000Z",
        "place_of_birth": "ត្រពាំងថ្នល់ កន្ទ្រាំង ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "085 527 525",
        "email": "samnang1sir@gmail.com",
        "current_address": "ត្រពាំងថ្នល់ កន្ទ្រាំង ប្រាសាទបាគង សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-09-20T07:01:46.290Z"
        },
        "__v": 0,
        "employee_id": "00580",
        "join_date": {
            "$date": "2023-09-20T07:02:48.406Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "650aa6e2a370502acaacfc94"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a46"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "650aae7da370502acaad20f2"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "សួន",
            "last_name": "សុគុន"
        },
        "latin_name": {
            "first_name": "Suon",
            "last_name": "Sokun"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/edec2101-f882-4ccc-8c61-cfad622377230932023jpeg.png",
            "name": "edec2101-f882-4ccc-8c61-cfad622377230932023jpeg.png"
        },
        "date_of_birth": "1998-07-02T08:16:54.000Z",
        "place_of_birth": "ប្រាសាទ សំរោងយា ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "096 623 4549",
        "email": "suonsokun02@gmail.com",
        "current_address": "ប្រាសាទ សំរោងយា ពួក សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-09-20T08:34:05.588Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "650aaf39a370502acaad2439"
        },
        "employee_id": "00581",
        "join_date": {
            "$date": "2023-09-20T08:37:17.540Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a47"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6510e9dca370502acab7f544"
        },
        "national_id": "00582",
        "khmer_name": {
            "first_name": "យ៉ន ",
            "last_name": "សុយ៉េន"
        },
        "latin_name": {
            "first_name": "Yorn",
            "last_name": "Soyen"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/bb1f7ba3-87e4-43d6-94a8-b3d5b61bae060912023jpeg.png",
            "name": "bb1f7ba3-87e4-43d6-94a8-b3d5b61bae060912023jpeg.png"
        },
        "date_of_birth": "2005-03-13T01:53:40.000Z",
        "place_of_birth": "ព្រៃលាន ពពេល សូទ្រនិគម សៀមរាប",
        "nationality": "Cambodian",
        "phone": "095 450 929",
        "email": "soyenyorn@gmail.com",
        "current_address": "ព្រៃលាន ពពេល សូទ្រនិគម សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "internship",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-09-25T02:01:00.973Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "6510ead0a370502acab7f964"
        },
        "employee_id": "00582",
        "join_date": {
            "$date": "2023-09-25T02:05:12.360Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a48"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6515215a0b669e8e4d74bacf"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "ឈុំ",
            "last_name": "សុផល"
        },
        "latin_name": {
            "first_name": "Chhum",
            "last_name": "Sophorl"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/0533269c-fd89-41de-a454-805deb5dc6a40942023jpeg.png",
            "name": "0533269c-fd89-41de-a454-805deb5dc6a40942023jpeg.png"
        },
        "date_of_birth": "1986-02-01T06:39:13.000Z",
        "place_of_birth": "ព្រៃវែង សំរោងយា ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "077 794 429",
        "email": "sophorlchhum@gmail.com",
        "current_address": "ព្រៃវែង សំរោងយា ពួក សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-09-28T06:46:50.535Z"
        },
        "__v": 0,
        "employee_id": "00583",
        "join_date": {
            "$date": "2023-09-25T06:47:00.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "651522630b669e8e4d74c282"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a49"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "654354d0703a4eada6e59820"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "ជា",
            "last_name": "សុមាស"
        },
        "latin_name": {
            "first_name": "Chea",
            "last_name": "Someas"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9dc358f3-7ff9-4c96-b899-fc23e9364d1c1142023jpeg.png",
            "name": "9dc358f3-7ff9-4c96-b899-fc23e9364d1c1142023jpeg.png"
        },
        "date_of_birth": "2023-11-02T07:41:04.099Z",
        "place_of_birth": "អញ្ចាញ នគរធំ សៀមរាប សៀមរាប",
        "nationality": "Cambodian",
        "phone": "011 691 078",
        "email": "someaschea@gmail.com",
        "current_address": "អញ្ចាញ នគរធំ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "resign",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-11-02T07:50:41.344Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "65435773703a4eada6e5a585"
        }
    },
    {
        "_id": {
            "$oid": "654359b3703a4eada6e5afc8"
        },
        "national_id": "00584",
        "khmer_name": {
            "first_name": "អ៊ាត",
            "last_name": "សុរី"
        },
        "latin_name": {
            "first_name": "Eat",
            "last_name": "Sokry"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/ec6a03dd-ee89-4942-9469-f100ee8b8b3d1142023jpeg.png",
            "name": "ec6a03dd-ee89-4942-9469-f100ee8b8b3d1142023jpeg.png"
        },
        "date_of_birth": "2023-11-01T08:03:50.000Z",
        "place_of_birth": "ព្រៃវែង សំរោងយា ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "011 882 144",
        "email": "eatsokry7777@gmail.com",
        "current_address": "ភូមិព្រៃគុយ អំពិល បាគង សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-11-02T08:11:31.931Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "65435a16703a4eada6e5b18a"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a4a"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "employee_id": "00584",
        "join_date": {
            "$date": "2023-11-01T07:04:44.000Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "6544baae703a4eada6eab625"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "ហ៊ុំ ",
            "last_name": "រតនៈ"
        },
        "latin_name": {
            "first_name": "Hom",
            "last_name": "Rathanak"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/797b9963-86ba-4b83-b30a-40fe0465df351152023jpeg.png",
            "name": "797b9963-86ba-4b83-b30a-40fe0465df351152023jpeg.png"
        },
        "date_of_birth": "2023-11-01T08:58:55.000Z",
        "place_of_birth": "បន្ទាយក្រង អន្លង់ត្នោត​ ក្រគរ ពោធិ៍សាត់",
        "nationality": "Cambodian",
        "phone": "070 206 425",
        "email": "rathanakhom@gmail.com",
        "current_address": "ជន្លង់ សាលាកំរើក សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-11-03T09:17:34.585Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "6544bb43703a4eada6eabceb"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a4b"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "employee_id": "00586",
        "join_date": {
            "$date": "2023-11-04T07:04:02.000Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "6544c245703a4eada6eb181d"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "Kimberly Michele",
            "last_name": "Smith"
        },
        "latin_name": {
            "first_name": "Kimberly Michele",
            "last_name": "Smith"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/5dec58ab-258a-4cd1-8be3-d7586031d4551152023jpeg.png",
            "name": "5dec58ab-258a-4cd1-8be3-d7586031d4551152023jpeg.png"
        },
        "date_of_birth": "1975-07-15T09:47:11.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "069 941 683",
        "email": "kimberly.michelle.smith@gmail.com",
        "current_address": "សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-11-03T09:49:57.921Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "6544c29d703a4eada6eb1c81"
        },
        "employee_id": "00585",
        "join_date": {
            "$date": "2023-11-10T03:00:26.332Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a4c"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "6548bad6703a4eada6f18e90"
        },
        "national_id": "030253448",
        "khmer_name": {
            "first_name": "ហួត",
            "last_name": "ផល្លា"
        },
        "latin_name": {
            "first_name": "Huot",
            "last_name": "Phalla"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/a6cfc10e-8924-498a-8e91-71ed8b0efdb91112023jpeg.png",
            "name": "a6cfc10e-8924-498a-8e91-71ed8b0efdb91112023jpeg.png"
        },
        "date_of_birth": "1983-05-04T08:57:23.000Z",
        "place_of_birth": "កំពង់ស្ពឺ",
        "nationality": "Cambodian",
        "phone": "017 267 733",
        "email": "huotphalla2009@yahoo.com",
        "current_address": "ត្រពាំងសេះ គោកចក សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": [
            {
                "start_end_date": "2023-2024",
                "title": "Primary Teacher",
                "company": "Go Global School",
                "key": {
                    "$date": "2023-12-07T06:59:59.085Z"
                }
            }
        ],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-11-06T10:07:18.870Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "6548bb54703a4eada6f19141"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a4d"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "employee_id": "00587",
        "join_date": {
            "$date": "2023-11-06T06:59:31.000Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "654da335727e5382de09d89f"
        },
        "national_id": "A05717031",
        "khmer_name": {
            "first_name": "Vivian",
            "last_name": "Fourie"
        },
        "latin_name": {
            "first_name": "Vivian",
            "last_name": "Fourie"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/9c3e647b-9153-4915-ba3f-ef22579be2fe1152023jpeg.png",
            "name": "9c3e647b-9153-4915-ba3f-ef22579be2fe1152023jpeg.png"
        },
        "date_of_birth": "1983-04-25T03:13:05.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "070 247 739",
        "email": "vivfourie21@gmail.com",
        "current_address": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-11-10T03:27:49.843Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "654da3f1727e5382de09dbd4"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a4e"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "employee_id": "00588",
        "join_date": {
            "$date": "2023-12-07T06:59:09.616Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "656e94978b7ad9839d2c47c4"
        },
        "national_id": "180559641",
        "khmer_name": {
            "first_name": "កូវ",
            "last_name": "សារិត"
        },
        "latin_name": {
            "first_name": "Kov",
            "last_name": "Sarith"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/1ea19ac7-ca4d-4096-8277-f3f54e75e9fa1222023jpeg.png",
            "name": "1ea19ac7-ca4d-4096-8277-f3f54e75e9fa1222023jpeg.png"
        },
        "date_of_birth": "1969-07-06T03:03:43.000Z",
        "place_of_birth": "វត្តបូព៌, សាលាកំរើក, សៀមរាប, សៀមរាប",
        "nationality": "Cambodian",
        "phone": "087 789 331",
        "email": "sarithkov@gmail.com",
        "current_address": "ត្រពាំងសេះ គោកចក សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-12-05T03:10:15.417Z"
        },
        "__v": 0,
        "employee_id": "00590",
        "join_date": {
            "$date": "2023-11-22T03:10:38.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "656e95988b7ad9839d2c5016"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a4f"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "656e9b5780a84fdb2d7a5d5f"
        },
        "national_id": "030746096",
        "khmer_name": {
            "first_name": "យឹម",
            "last_name": "សុផល"
        },
        "latin_name": {
            "first_name": "Yim",
            "last_name": "Sophal"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/42ade6e1-57b1-4eb5-ab47-91c435f84c1e1222023jpeg.png",
            "name": "42ade6e1-57b1-4eb5-ab47-91c435f84c1e1222023jpeg.png"
        },
        "date_of_birth": "1985-08-20T03:20:08.000Z",
        "place_of_birth": "ក្រាំងស្លែង ព្រៃក្រសាំង ឧដុង្គ កំពង់ស្ពឺ",
        "nationality": "Cambodian",
        "phone": "010 899 970",
        "email": "yoem.sophal@yahoo.com",
        "current_address": "ព្រះត្រពាំង ដំដែក សូទ្រនិគម សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-12-05T03:39:03.479Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "656e9c3080a84fdb2d7a63ff"
        },
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a50"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "employee_id": "00594",
        "join_date": {
            "$date": "2023-12-07T06:58:18.890Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "656ea70380a84fdb2d7ad902"
        },
        "national_id": "181037069",
        "khmer_name": {
            "first_name": "ផាយ",
            "last_name": "សុឃី"
        },
        "latin_name": {
            "first_name": "Phay",
            "last_name": "Sokhey"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/79cde0c9-0e0f-4d02-a2a7-c9278002f5d21222023jpeg.png",
            "name": "79cde0c9-0e0f-4d02-a2a7-c9278002f5d21222023jpeg.png"
        },
        "date_of_birth": "2005-01-13T03:54:46.000Z",
        "place_of_birth": "ក្របៅ ប្រិយ៍ ស្រីស្នំ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "090​ 88​​5 423",
        "email": "sokheyphay@gmail.com",
        "current_address": "ថ្មី ស្វាយដង្គំ សៀមរាប សៀមរាប",
        "role": "employee",
        "working_status": "working",
        "type": "internship",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "created_at": {
            "$date": "2023-12-05T04:28:51.311Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "656ea80b80a84fdb2d7adfdd"
        },
        "employee_id": "00589",
        "join_date": {
            "$date": "2023-11-10T04:34:22.000Z"
        },
        "work_book": false,
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a51"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ]
    },
    {
        "_id": {
            "$oid": "656ecf02822b75586a7b335c"
        },
        "national_id": "180333520",
        "khmer_name": {
            "first_name": "ដឹប",
            "last_name": "ចន្ទ្រា"
        },
        "latin_name": {
            "first_name": "Dep",
            "last_name": "Chantrea"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/658ae75f-beed-446a-8a3c-f7b4947edc6c1222023jpeg.png",
            "name": "658ae75f-beed-446a-8a3c-f7b4947edc6c1222023jpeg.png"
        },
        "date_of_birth": "1984-06-16T07:15:32.000Z",
        "place_of_birth": "ស្រិតខាងលិច កន្ទ្រាំង ប្រាសាទបាគង សៀមរាប",
        "nationality": "Cambodian",
        "phone": "011 914 856",
        "email": "chantreadep@gmail.com",
        "current_address": "ស្រិតខាងលិច កន្ទ្រាំង ប្រាសាទបាគង សៀមរាប",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        //   "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "ph": [
            {
                "_id": {
                    "$oid": "656ecf9fd4e91f4e992d7a52"
                },
                "title": "Annual Leave",
                "totalDay": 18,
                "year": "2023",
                "status": true
            }
        ],
        "created_at": {
            "$date": "2023-12-05T07:19:30.594Z"
        },
        "__v": 0,
        "contract": {
            "$oid": "656eda104fa8f4a257e1ca17"
        },
        "employee_id": "00596",
        "join_date": {
            "$date": "2023-12-07T06:57:33.961Z"
        },
        "work_book": false
    },
    {
        "_id": {
            "$oid": "656ee9e74fa8f4a257e258fc"
        },
        "national_id": "180572865",
        "khmer_name": {
            "first_name": "ផាន់",
            "last_name": "យ៉ាំ"
        },
        "latin_name": {
            "first_name": "Phan",
            "last_name": "Yam"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/827b9eb0-22f9-4698-974b-f2c9b92477f21222023jpeg.png",
            "name": "827b9eb0-22f9-4698-974b-f2c9b92477f21222023jpeg.png"
        },
        "date_of_birth": "2023-12-04T08:56:38.000Z",
        "place_of_birth": "គោករុន សសរស្តម្ភ ពួក សៀមរាប",
        "nationality": "Cambodian",
        "phone": "0",
        "email": "phanyam18@gamil.com",
        "current_address": "គោករុន សសរស្តម្ភ ពួក សៀមរាប",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "ph": ["file_upload"],
        "created_at": {
            "$date": "2023-12-05T09:14:15.205Z"
        },
        "__v": 0,
        "employee_id": "00593",
        "join_date": {
            "$date": "2023-12-04T09:14:28.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "656eeb134fa8f4a257e26747"
        }
    },
    {
        "_id": {
            "$oid": "656fd64ee1a8c30579969fe7"
        },
        "national_id": "180507751",
        "khmer_name": {
            "first_name": "រុំ",
            "last_name": "តាំងហ៊ូ"
        },
        "latin_name": {
            "first_name": "Roum",
            "last_name": "Tanghou"
        },
        "gender": "Female",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/4c6b8392-6d1d-4279-be62-541713ced52c1232023jpeg.png",
            "name": "4c6b8392-6d1d-4279-be62-541713ced52c1232023jpeg.png"
        },
        "date_of_birth": "1995-07-06T01:53:11.000Z",
        "place_of_birth": "ត្រុំខាងជើង ជ្រោយនាងងួន ស្រីស្នំ សៀមរាប",
        "nationality": "Cambodian",
        "phone": "097 281 2199",
        "email": "tanghouroum@gmail.com",
        "current_address": "ត្រុំខាងជើង ជ្រោយនាងងួន ស្រីស្នំ សៀមរាប",
        "working_status": "working",
        "type": "teaching",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "ph": ["file_upload"],
        "created_at": {
            "$date": "2023-12-06T02:02:54.656Z"
        },
        "__v": 0,
        "employee_id": "00597",
        "join_date": {
            "$date": "2023-12-06T02:02:58.172Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "656fd69de1a8c3057996a142"
        }
    },
    {
        "_id": {
            "$oid": "65716c53f63c1ef7a4a67ee0"
        },
        "national_id": "170711979",
        "khmer_name": {
            "first_name": "ជិន",
            "last_name": "រ៉ានី"
        },
        "latin_name": {
            "first_name": "Chin",
            "last_name": "Rany"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/504489ae-cbae-4809-8285-3cd8a17cc2591242023jpeg.png",
            "name": "504489ae-cbae-4809-8285-3cd8a17cc2591242023jpeg.png"
        },
        "date_of_birth": "1988-06-10T06:45:25.000Z",
        "place_of_birth": "កាឡោមភ្លុក ព្រៃស្វាយ មោងឫស្សី បាត់ដំបង",
        "nationality": "Cambodian",
        "phone": "085 683 011",
        "email": "jonrany752@gmail.com",
        "current_address": "ភ្នំក្រោម សៀមរាប​ សៀមរាប សៀមរាប",
        "working_status": "working",
        "type": "staff",
        "marital": "married",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "ph": ["file_upload"],
        "created_at": {
            "$date": "2023-12-07T06:55:15.759Z"
        },
        "__v": 0,
        "employee_id": "00595",
        "join_date": {
            "$date": "2023-12-07T06:55:19.883Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "65716f95f63c1ef7a4a69776"
        }
    },
    {
        "_id": {
            "$oid": "6571733ef63c1ef7a4a6ce4e"
        },
        "national_id": "0",
        "khmer_name": {
            "first_name": "Todd",
            "last_name": "E Hildebrand"
        },
        "latin_name": {
            "first_name": "Todd",
            "last_name": "E Hildebrand"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/fcf9f90d-c127-4200-a326-ef481ba419b01242023jpeg.png",
            "name": "fcf9f90d-c127-4200-a326-ef481ba419b01242023jpeg.png"
        },
        "date_of_birth": "2023-12-01T07:13:05.000Z",
        "place_of_birth": "សៀមរាប",
        "nationality": "South African",
        "phone": "010 880 942",
        "email": "Photomut@mac.com",
        "current_address": "សៀមរាប",
        "working_status": "working",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "ph": ["file_upload"],
        "created_at": {
            "$date": "2023-12-07T07:24:46.240Z"
        },
        "__v": 0,
        "employee_id": "00592",
        "join_date": {
            "$date": "2023-12-01T07:28:18.000Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "65717580f63c1ef7a4a6e398"
        }
    },
    {
        "_id": {
            "$oid": "6576651aa34fd05ee1f58c7b"
        },
        "national_id": "011392234",
        "khmer_name": {
            "first_name": "គង់ ",
            "last_name": " ពុទ្ធិសិទ្ធ"
        },
        "latin_name": {
            "first_name": "KONG ",
            "last_name": " PUTHYSITH"
        },
        "gender": "Male",
        "image": {
            "src": "https://storage.go-globalschool.com/api/uploads/employee-Image/60e0dd62-ae5d-472b-adce-89aede0c762e1212023jpeg.png",
            "name": "60e0dd62-ae5d-472b-adce-89aede0c762e1212023jpeg.png"
        },
        "date_of_birth": "1992-03-27T01:00:32.000Z",
        "place_of_birth": "សង្គាត់បឹងកេងកងទី១​ ខណ្ឌចំការមន​ ភ្នំពេញ",
        "nationality": "Cambodian",
        "phone": "016541900",
        "email": "puthisethk@gmail.com",
        "current_address": "ធ្លកអណ្ដូង ស្លក្រាម សៀមរាប សៀមរាប",
        "working_status": "working",
        "type": "teaching",
        "marital": "single",
        "federation_and_dependent_children": 0,
        "insurance": ["p"],
        "experience": ["l"],
        "edu_background": ["insurance"],
        "work_permit": ["insurance"],
        "file_upload": ["file_upload"],
        "ph": ["file_upload"],
        "created_at": {
            "$date": "2023-12-11T01:25:46.832Z"
        },
        "__v": 0,
        "employee_id": "",
        "join_date": {
            "$date": "2023-12-11T01:29:52.968Z"
        },
        "work_book": false,
        "contract": {
            "$oid": "65766d60a34fd05ee1f5d382"
        }
    }]
export default generate;
import React, { useState } from "react";
import Image from "next/image";
import { BsFillCloudUploadFill } from "react-icons/bs";


function BoIndex() {
  const [selectedFirstHolder, setSelectedFirstHolder] = useState("");
  const [selectedSecondJointHolder, setSelectedSecondJointHolder] =
    useState("");
  const [selectedThirdJointHolder, setSelectedThirdJointHolder] = useState("");
  const [selectedContactPerson, setSelectedContactPerson] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedBirthDate, setSelectedBirthDate] = useState("");
  const [selectedFather, setSelectedFather] = useState("");
  const [selectedMother, setSelectedMother] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("");
  const [selectedCitizen, setSelectedCitizen] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPostalCode, setSelectedPostalCode] = useState("");
  const [selectedMobile, setSelectedMobile] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedFax, setSelectedFax] = useState("");
  const [selectedFirstHolderNid, setSelectedFirstHolderNid] = useState("");
  const [selectedSecondHolderNid, setSelectedSecondHolderNid] = useState("");
  const [selectedThridHolderNid, setSelectedThridHolderNid] = useState("");
  const [selectedPassportNo, setSelectedPassportNo] = useState("");
  const [selectedPassportIssueDate, setSelectedPassportIssueDate] =
    useState("");
  const [selectedPassportExpiryDate, setSelectedPassportExpiryDate] =
    useState("");
  const [selectedPassportIssuePlace, setSelectedPassportIssuePlace] =
    useState("");

  const [selectedBankName, setSelectedBankName] = useState([]);
  const [selectedBranchName, setSelectedBranchName] = useState([]);
  const [selectedBankAcNo, setSelectedBankAcNo] = useState([]);
  const [selectedRoutingNo, setSelectedRoutingNo] = useState([]);
  const [selectedTaxExe, setselectedTaxExe] = useState("");
  const [selectedTaxIdentificationNo, setselectedTaxIdentificationNo] =
    useState("");
  const [selectedNidFrontImages, setSelectedNidFrontImages] = useState([]);
  const [selectedNidBackImages, setSelectedNidBackImages] = useState([]);
  const [selectedPictureImages, setSelectedPictureImages] = useState([]);
  const [selectedTinImages, setSelectedTinImages] = useState([]);
  const [selectedSignatureImages, setSelectedSignatureImages] = useState([]);

  const handleImageUpload = (event, setImageFunc) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageFunc((prevImages) => [...prevImages, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index, setImageFunc) => {
    setImageFunc((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };
  const handleSelectChange = (value, setFunc) => {
    setFunc(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract form data
    const formData = new FormData(event.target);
    console.log(selectedNidFrontImages);
    // Create an array of image objects for front images
    const frontImages = selectedNidFrontImages.map((image) => ({ image }));

    // Create an array of image objects for back images
    const backImages = selectedNidBackImages.map((image) => ({ image }));
    const pictureImages = selectedPictureImages.map((image) => ({ image }));
    const tinImages = selectedTinImages.map((image) => ({ image }));
    const signatureImages = selectedSignatureImages.map((image) => ({
      image,
    }));
    console.log(selectedSignatureImages);
    console.log(selectedNidBackImages);
    console.log(selectedNidFrontImages);
    console.log(selectedPictureImages);
    console.log(selectedTinImages);
    console.log(backImages);
    console.log(pictureImages);
    console.log(tinImages);
    console.log(frontImages);
    console.log(signatureImages);
    try {
      // Send the form data as JSON using the POST method
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstHolder: selectedFirstHolder,
          secondJointHolder: selectedSecondJointHolder,
          thirdJointHolder: selectedThirdJointHolder,
          contactPerson: selectedContactPerson,
          sex: selectedSex,
          birthDate: selectedBirthDate,
          father: selectedFather,
          mother: selectedMother,
          occupation: selectedOccupation,
          flag: selectedFlag,
          citizen: selectedCitizen,
          address: selectedAddress,
          city: selectedCity,
          state: selectedState,
          country: selectedCountry,
          postalCode: selectedPostalCode,
          mobile: selectedMobile,
          email: selectedEmail,
          fax: selectedFax,
          firstHolderNid: selectedFirstHolderNid,
          secondHolderNid: selectedSecondHolderNid,
          thridHolderNid: selectedThridHolderNid,
          passportNo: selectedPassportNo,
          passportIssueDate: selectedPassportIssueDate,
          passportExpiryDate: selectedPassportExpiryDate,
          passportIssuePlace: selectedPassportIssuePlace,
          bankName: selectedBankName,
          branchName: selectedBranchName,
          bankAcNo: selectedBankAcNo,
          routingNo: selectedRoutingNo,
          taxExemption: selectedTaxExe,
          taxIdentificationNo: selectedTaxIdentificationNo,
          frontImages,
          backImages,
          pictureImages,
          tinImages,
          signatureImages,
        }),
      });

      // Log the form data to the console
      console.log(
        "Form Data:",
        JSON.stringify(
          {
            firstHolder: selectedFirstHolder,
            secondJointHolder: selectedSecondJointHolder,
            thirdJointHolder: selectedThirdJointHolder,
            contactPerson: selectedContactPerson,
            sex: selectedSex,
            birthDate: selectedBirthDate,
            father: selectedFather,
            mother: selectedMother,
            occupation: selectedOccupation,
            flag: selectedFlag,
            citizen: selectedCitizen,
            address: selectedAddress,
            city: selectedCity,
            state: selectedState,
            country: selectedCountry,
            postalCode: selectedPostalCode,
            mobile: selectedMobile,
            email: selectedEmail,
            fax: selectedFax,
            firstHolderNid: selectedFirstHolderNid,
            secondHolderNid: selectedSecondHolderNid,
            thridHolderNid: selectedThridHolderNid,
            passportNo: selectedPassportNo,
            passportIssueDate: selectedPassportIssueDate,
            passportExpiryDate: selectedPassportExpiryDate,
            passportIssuePlace: selectedPassportIssuePlace,
            bankName: selectedBankName,
            branchName: selectedBranchName,
            bankAcNo: selectedBankAcNo,
            routingNo: selectedRoutingNo,
            taxExemption: selectedTaxExe,
            taxIdentificationNo: selectedTaxIdentificationNo,
            frontImages,
            backImages,
            pictureImages,
            tinImages,
            signatureImages,
          },
          null,
          2
        )
      );

      if (response.ok) {
        // Form submission successful
        console.log("Form submitted successfully");
        // Reset form and selected images
        event.target.reset();
        setSelectedNidFrontImages([]);
        setSelectedNidBackImages([]);
      } else {
        // Form submission failed
        console.log("Form submission failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Extract form data
  //   const formData = new FormData(event.target);
  //   const frontImages = selectedNidFrontImages;
  //   const backImages = selectedNidBackImages;
  //   const pictureImages = selectedPictureImages;
  //   const tinImages = selectedTinImages;
  //   const signatureImages = selectedSignatureImages;

  //   // Add additional form fields if needed
  //   formData.append("frontImages", frontImages);
  //   formData.append("backImages", backImages);
  //   formData.append("pictureImages", pictureImages);
  //   formData.append("tinImages", tinImages);
  //   formData.append("signatureImages", signatureImages);

  //   // Perform form submission
  //   // You can send the form data to a server or perform client-side processing
  //   // For demonstration purposes, we'll log the form data to the console
  //   console.log("Form Data:", Object.fromEntries(formData.entries()));

  //   // Reset form and selected images
  //   event.target.reset();
  //   setSelectedNidFrontImages([]);
  //   setSelectedNidBackImages([]);
  //   setSelectedPictureImages([]);
  //   setSelectedTinImages([]);
  //   setSelectedSignatureImages([]);
  // };

  return (
    <>
      <div className="bg-ksl_light_red ">
        <div className="px-40 xsm:px-5 sm:px-5 pt-32 pb-10">
          <div className="bg-white p-6 rounded-3xl">
            <div className="flex flex-col">
              <div className="font-mulish text-center">
                <p className="text-text_36 xsm:text-3xl sm:text-3xl font-semibold text-ksl_dark_black">
                  Open BO Account
                </p>
                <p className="text-base text-ksl_light_gray w-1/2 xsm:w-full sm:w-full mx-auto py-10">
                  Please complete all details in{" "}
                  <strong className="text-ksl_dark_black">
                    CAPITAL letters
                  </strong>
                  . Please fill all names correctly. All communication shall be
                  sent only to the First Named Account Holder’s correspondence
                  address.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <p className="px-4 py-2 bg-ksl_dark_red text-white text-base w-2/12 xsm:w-full sm:w-full rounded-lg">
                    Personal Details
                  </p>
                </div>
                <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
                  <input
                    type="text"
                    id="First_holder"
                    value={selectedFirstHolder}
                    onChange={(e) => setSelectedFirstHolder(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Name of the First Holder / Company"
                    required
                  />
                  <input
                    type="text"
                    id="second_joint_holder"
                    value={selectedSecondJointHolder}
                    onChange={(e) =>
                      setSelectedSecondJointHolder(e.target.value)
                    }
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Second Joint Holder"
                  />
                  <input
                    type="text"
                    id="third_joint_holder"
                    value={selectedThirdJointHolder}
                    onChange={(e) =>
                      setSelectedThirdJointHolder(e.target.value)
                    }
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Third Joint Holder"
                  />
                  <input
                    type="text"
                    id="contact_person"
                    value={selectedContactPerson}
                    onChange={(e) => setSelectedContactPerson(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Contact Person"
                  />
                  <select
                    value={selectedSex}
                    onChange={(e) => setSelectedSex(e.target.value)}
                    required
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                  >
                    <option value="">Sex Code</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  <input
                    type="text"
                    id="date_of_birth"
                    value={selectedBirthDate}
                    onChange={(e) => setSelectedBirthDate(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Date of Birth / Registration"
                    required
                  />

                  <input
                    type="text"
                    id="father"
                    value={selectedFather}
                    onChange={(e) => setSelectedFather(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Father / Husbands Name "
                    required
                  />
                  <input
                    type="text"
                    id="mother"
                    value={selectedMother}
                    onChange={(e) => setSelectedMother(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Mothers Name"
                    required
                  />
                  <input
                    type="text"
                    id="occupation"
                    value={selectedOccupation}
                    onChange={(e) => setSelectedOccupation(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Occupation"
                    required
                  />

                  <input
                    type="text"
                    id="flag"
                    value={selectedFlag}
                    onChange={(e) => setSelectedFlag(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Residency Flag"
                    required
                  />
                  <input
                    type="text"
                    id="citizen_of"
                    value={selectedCitizen}
                    onChange={(e) => setSelectedCitizen(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Citizen Of"
                    required
                  />

                  <textarea
                    id="message"
                    rows="1"
                    value={selectedAddress}
                    onChange={(e) => setSelectedAddress(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Address"
                  ></textarea>
                  <input
                    type="text"
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="City"
                    required
                  />

                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    required
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                  >
                    <option value="">Divisions</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Barisal">Barisal</option>
                  </select>
                  <input
                    type="text"
                    id="country"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Country"
                    required
                  />
                  <input
                    type="text"
                    id="postal_code"
                    value={selectedPostalCode}
                    onChange={(e) => setSelectedPostalCode(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Postal Code"
                    required
                  />
                  <input
                    type="text"
                    id="mobile"
                    value={selectedMobile}
                    onChange={(e) => setSelectedMobile(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Mobile"
                    required
                  />
                  <input
                    type="text"
                    id="email"
                    value={selectedEmail}
                    onChange={(e) => setSelectedEmail(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    id="fax"
                    value={selectedFax}
                    onChange={(e) => setSelectedFax(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Fax"
                    required
                  />

                  <input
                    type="text"
                    id="first_holder_Nid"
                    value={selectedFirstHolderNid}
                    onChange={(e) => setSelectedFirstHolderNid(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="First Holder National ID"
                  />
                  <input
                    type="text"
                    id="second_holder_Nid"
                    value={selectedSecondHolderNid}
                    onChange={(e) => setSelectedSecondHolderNid(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Second Holder National ID"
                  />
                  <input
                    type="text"
                    id="third_holder_Nid"
                    value={selectedThridHolderNid}
                    onChange={(e) => setSelectedThridHolderNid(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Third Holder National ID"
                  />
                </div>

                <div className="mb-6">
                  <p className="px-4 py-2 bg-ksl_dark_red text-white text-base w-2/12 xsm:w-full sm:w-full rounded-lg">
                    PASSPORT DETAILS
                  </p>
                </div>
                <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
                  <input
                    type="text"
                    id="passport_no"
                    value={selectedPassportNo}
                    onChange={(e) => setSelectedPassportNo(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Passport No."
                  />
                  <input
                    type="text"
                    id="passport_issue_date"
                    value={selectedPassportIssueDate}
                    onChange={(e) =>
                      setSelectedPassportIssueDate(e.target.value)
                    }
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Passport Issue Date"
                  />
                  <input
                    type="text"
                    id="passport_exp"
                    value={selectedPassportExpiryDate}
                    onChange={(e) =>
                      setSelectedPassportExpiryDate(e.target.value)
                    }
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Passport Expiry Date"
                  />
                  <input
                    type="text"
                    id="passport_issue_place"
                    value={selectedPassportIssuePlace}
                    onChange={(e) =>
                      setSelectedPassportIssuePlace(e.target.value)
                    }
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Passport Issue Place"
                  />
                </div>
                <div className="mb-6">
                  <p className="px-4 py-2 bg-ksl_dark_red text-white text-base w-2/12 xsm:w-full sm:w-full rounded-lg">
                    BANK DETAILS
                  </p>
                </div>
                <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
                  <input
                    type="text"
                    id="bank_name"
                    value={selectedBankName}
                    onChange={(e) => setSelectedBankName(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Bank Name"
                    required
                  />
                  <input
                    type="text"
                    id="branch_name"
                    value={selectedBranchName}
                    onChange={(e) => setSelectedBranchName(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Branch Name"
                    required
                  />
                  <input
                    type="text"
                    id="bank_ac_no"
                    value={selectedBankAcNo}
                    onChange={(e) => setSelectedBankAcNo(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Bank A/C No."
                    required
                  />
                  <input
                    type="text"
                    id="routing_no"
                    value={selectedRoutingNo}
                    onChange={(e) => setSelectedRoutingNo(e.target.value)}
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Routing Number"
                    required
                  />
                </div>
                <div className="mb-6">
                  <p className="px-4 py-2 bg-ksl_dark_red text-white text-base w-2/12 xsm:w-full sm:w-full rounded-lg">
                    TAX DETAILS
                  </p>
                </div>
                <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
                  <select
                    value={selectedTaxExe}
                    onChange={(e) => setselectedTaxExe(e.target.value)}
                    required
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                  >
                    <option value="">Tax Exemption</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <input
                    type="text"
                    id="tax_id_no"
                    value={selectedTaxIdentificationNo}
                    onChange={(e) =>
                      setselectedTaxIdentificationNo(e.target.value)
                    }
                    className="bg-ksl_light_red border-0 text-ksl_light_gray text-sm rounded-lg focus:outline-none block w-full py-2.5 px-10"
                    placeholder="Tax Identification No"
                    required
                  />
                </div>

                <div className="mb-6">
                  <p className="px-4 py-2 bg-ksl_dark_red text-white text-base w-2/12 xsm:w-full sm:w-full rounded-lg">
                    Upload Image
                  </p>
                </div>

                <div className="grid grid-cols-5 xsm:grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
                  <div className="flex flex-col">
                    <label htmlFor="front-image-upload">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 bg-ksl_light_red">
                        <div>
                          <BsFillCloudUploadFill className="text-ksl_light_gray text-3xl" />
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                          NID Front
                        </p>
                      </div>
                      <input
                        id="front-image-upload"
                        type="file"
                        accept="image/*"
                        // value={selectedNidFrontImages}
                        onChange={(e) =>
                          handleImageUpload(e, setSelectedNidFrontImages)
                        }
                        className="hidden"
                      />
                    </label>
                    <div className="w-full">
                      {selectedNidFrontImages.map((image, index) => (
                        <div key={index} className="w-full p-2 ">
                          <Image
                            src={image}
                            alt={`Image ${index}`}
                            width={500}
                            height={500}
                            className="w-auto h-60 mx-auto"
                          />
                          <div className="flex justify-center">
                            <button
                              onClick={() =>
                                removeImage(index, setSelectedNidFrontImages)
                              }
                              className="mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="back-image-upload">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 bg-ksl_light_red">
                        <div>
                          <BsFillCloudUploadFill className="text-ksl_light_gray text-3xl" />
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                          NID Back
                        </p>
                      </div>
                      <input
                        id="back-image-upload"
                        type="file"
                        accept="image/*"
                        // value={selectedNidBackImages}
                        onChange={(e) =>
                          handleImageUpload(e, setSelectedNidBackImages)
                        }
                        className="hidden"
                      />
                    </label>
                    <div className="w-full">
                      {selectedNidBackImages.map((image, index) => (
                        <div key={index} className="w-auto p-2">
                          <Image
                            src={image}
                            alt={`Image ${index}`}
                            width={500}
                            height={500}
                            className="w-auto h-60 mx-auto"
                          />
                          <div className="flex justify-center">
                            <button
                              onClick={() =>
                                removeImage(index, setSelectedNidBackImages)
                              }
                              className="mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="picture-image-upload">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 bg-ksl_light_red">
                        <div>
                          <BsFillCloudUploadFill className="text-ksl_light_gray text-3xl" />
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                          Your Picture
                        </p>
                      </div>
                      <input
                        id="picture-image-upload"
                        type="file"
                        accept="image/*"
                        // value={selectedPictureImages}
                        onChange={(e) =>
                          handleImageUpload(e, setSelectedPictureImages)
                        }
                        className="hidden"
                      />
                    </label>
                    <div className="w-full">
                      {selectedPictureImages.map((image, index) => (
                        <div key={index} className="w-auto p-2">
                          <Image
                            src={image}
                            alt={`Image ${index}`}
                            width={500}
                            height={500}
                            className="w-auto h-60 mx-auto"
                          />
                          <div className="flex justify-center">
                            <button
                              onClick={() =>
                                removeImage(index, setSelectedPictureImages)
                              }
                              className="mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="TIN-image-upload">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 bg-ksl_light_red">
                        <div>
                          <BsFillCloudUploadFill className="text-ksl_light_gray text-3xl" />
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                          TIN Certificate
                        </p>
                      </div>
                      <input
                        id="TIN-image-upload"
                        type="file"
                        accept="image/*"
                        // value={selectedTinImages}
                        onChange={(e) =>
                          handleImageUpload(e, setSelectedTinImages)
                        }
                        className="hidden"
                      />
                    </label>
                    <div className="w-full">
                      {selectedTinImages.map((image, index) => (
                        <div key={index} className="w-auto p-2">
                          <Image
                            src={image}
                            alt={`Image ${index}`}
                            width={500}
                            height={500}
                            className="w-auto h-60 mx-auto"
                          />
                          <div className="flex justify-center">
                            <button
                              onClick={() =>
                                removeImage(index, setSelectedTinImages)
                              }
                              className="mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="signature-image-upload">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 bg-ksl_light_red">
                        <div>
                          <BsFillCloudUploadFill className="text-ksl_light_gray text-3xl" />
                        </div>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                          Signature
                        </p>
                      </div>
                      <input
                        id="signature-image-upload"
                        type="file"
                        accept="image/*"
                        // value={selectedSignatureImages}
                        onChange={(e) =>
                          handleImageUpload(e, setSelectedSignatureImages)
                        }
                        className="hidden"
                      />
                    </label>
                    <div className="w-full">
                      {selectedSignatureImages.map((image, index) => (
                        <div key={index} className="w-auto p-2">
                          <Image
                            src={image}
                            alt={`Image ${index}`}
                            width={500}
                            height={500}
                            className="w-auto h-60 mx-auto"
                          />
                          <div className="flex justify-center">
                            <button
                              onClick={() =>
                                removeImage(index, setSelectedSignatureImages)
                              }
                              className="mt-5 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="px-4 py-2 bg-ksl_dark_red text-white text-base w-2/12 xsm:w-full sm:w-full rounded-lg">
                    Declaration
                  </p>
                </div>
                <p className="mb-6 text-base text-ksl_light_gray">
                  Please complete all details in{" "}
                  <strong className="text-ksl_dark_black">
                    CAPITAL letters
                  </strong>
                  . Please fill all names correctly. All communication shall be
                  sent only to the First . shall be sent only to the First .
                  shall be sent only to the First .
                </p>
                <div className="flex justify-center mb-6">
                  <button
                    type="submit"
                    className="bg-ksl_dark_red text-white font-medium text-text_18 py-2 px-40 xsm:px-20 sm:px-20 rounded "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoIndex;

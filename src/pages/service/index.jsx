import "./styles.css";
import SelectCar from "../../components/selectCar";
import ServiceModel from "../../components/model/serviceModel";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      sideTile: "RECOMMENDED",
      serviceType: "Standard Service",
      serviceTypeImage:
        "https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/Standard%20Service%20Package%20sq.jpg",
      timeTaken: "6 Hrs Taken",
      oldPrice: "5456",
      newPrice: "3819",
      warranty:
        " • 1000 Kms or 1 Month Warranty • Every 10,000 Kms or 6 Months (Recommended)",
      serviceList: [
        "Car Scanning",
        "Wiper Fluid Replacement",
        "Car Wash",
        "Engine Oil Replacement",
        "Interior Vacuuming ( Carpet & Seats )",
      ],
    },
    {
      id: 1,
      sideTile: "FREE AC GAS TOP-UP",
      serviceType: "Comprehensive Service",
      serviceTypeImage:
        "https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/Comprehensive%20Service%20Package%202%20sq.jpg",
      timeTaken: "8 Hrs Taken",
      oldPrice: "8384",
      newPrice: "5869",
      warranty:
        " • 1000 Kms or 1 Month Warranty    • Every 20,000 Kms or 12 Months (Recommended)",
      serviceList: [
        "AC Filter Replacement",
        "Fuel Filter Checking",
        "Car Scanning",
        "Engine Oil Replacement",
        "Interior Vacuuming ( Carpet & Seats )",
      ],
    },
    {
      id: 1,
      sideTile: "",
      serviceType: "Basic Service",
      serviceTypeImage:
        "https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg",
      timeTaken: "4 Hrs Taken",
      oldPrice: "4292",
      newPrice: "3219",
      warranty:
        "• 1000 Kms or 1 Month Warranty    • Every 5000 Kms or 3 Months (Recommended)",
      serviceList: [
        "Wiper Fluid Replacement",
        "Fuel Filter Checking",
        "Engine Oil Replacement",
        "Interior Vacuuming ( Carpet & Seats )",
      ],
    },
  ];
  return (
    <>
      <div style={{ margin: "3%" }}>
        <div>
          <SelectCar />
        </div>
        <h1>Scheduled Packages</h1>
        {serviceData.map((item) => (
          <div className="border" key={item.id}>
            {item.sideTile ? (
              <div className="recommended ">{item.sideTile}</div>
            ) : (
              ""
            )}
            <div className="card">
              <div className="innerCard">
                <div styles={{ position: "relative" }}>
                  <img
                    loading="lazy"
                    className="img"
                    src={item.serviceTypeImage}
                    alt="Car Standard Service"
                  />
                </div>
                <div className="titlePosition">
                  <div className="title" style={{ marginBottom: "15px" }}>
                    <div className="svcName">
                      <h2 style={{ margin: 0 }} className="-svcText">
                        {item.serviceType}
                      </h2>
                    </div>
                    <div className="time">
                      <img
                        loading="lazy"
                        src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Services/ServicesListDesktop/76D2D1C8-A85C-4C56-A53D-DE23B9C19F76.svg"
                        className="timeImg"
                        alt="Time Taken during service"
                      />
                      <div className="timeText"> {item.timeTaken}</div>
                    </div>
                  </div>
                  <div
                    style={{ marginLeft: 0, marginBottom: "20px" }}
                    className="_1qUuq"
                  >
                    {item.warranty}
                  </div>
                  <div className="itemListElement">
                    {item.serviceList.map((items) => (
                      <div className="item" key={item}>
                        <img
                          loading="lazy"
                          src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Services/B267FE43-1120-4815-B81E-6C2AE1EFC4C1.svg"
                          className="itemImage"
                          alt="Included"
                        />
                        <div className="itemText">{items}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="priceBox">
                <div className="price">
                  <div className="prvAmount">₹ {item.oldPrice}</div>
                  <div className="crrtPrice">₹ {item.newPrice}</div>
                </div>

                <ServiceModel open={true} servicePkg={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;

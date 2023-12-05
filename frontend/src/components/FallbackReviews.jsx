import FallbackReviewCard from "./FallbackReviewCard"
function FallbackReviews() {
  const storedReviews = [
    {
      reviewId: "0009a899-e887-4eff-9f44-8e28ca1e33df",
      userName: "EZZ Bialy",
      reviewDate: "2023-04-12T00:00:00.000Z",
      reviewScore: 5,
      reviewText:
        "This app is the best app for Quran and the best thing that it doesn't have adds",
      postedOn: "playStore",
      id: 1,
    },
    {
      reviewId: "00699730-da92-4973-8c72-cd12725ecf16",
      userName: "Mohsin Hussain",
      reviewDate: "2023-01-13T23:00:00.000Z",
      reviewScore: 5,
      reviewText:
        "Allah Humma Barik this app is exceptional if you want to get into a habit of reading the quran be it may even if its just a verse a day. I do dua for you that Allah swt grants you jannat ul firdos for everyone who has taken part to make this app possible Ameen. I have a suggestion, if you could have the ability to speed the recitation voice up or slow it down (like Quran central) keep up your good work",
      postedOn: "playStore",
      id: 3,
    },
    {
      reviewId: "00d98e11-f1ae-4254-be73-174093da4a3e",
      userName: "Hater Of love",
      reviewDate: "2023-03-24T00:00:00.000Z",
      reviewScore: 5,
      reviewText:
        "I really recommend this app baraka Allah fikom especially when u add dark mode it become amazing I'm truly happy for that thnx alot and Ramadan Kareem 🩷🩷🥹",
      postedOn: "playStore",
      id: 6,
    },
    {
      reviewId: "010d22e1-50d4-410c-9935-77c42fbdeab3",
      userName: "Alhassan Mansour",
      reviewDate: "2023-09-11T23:00:00.000Z",
      reviewScore: 5,
      reviewText:
        "It's a really good app. It sets you challenges, goals, reminders, etc. It's really good I definitely would recommend",
      postedOn: "playStore",
      id: 7,
    },
    {
      reviewId: "0146dd1d-7cb9-48a7-8b37-7e353c6ada41",
      userName: "Duan Bunar",
      reviewDate: "2022-11-14T23:00:00.000Z",
      reviewScore: 5,
      reviewText:
        "The best Qur'an app i have seen so far in my life. I love it . I can see it is build and hand crafted with heart and love pouring ❤️❤️❤️. It helps me tremendously in my daily duties as a Muslim . I love it ⭐⭐⭐⭐⭐",
      postedOn: "playStore",
      id: 10,
    },
  ]

  return (
    <>
      <h2 className="testimonialTitle">
        User Testimonials:
        <br />
        The Power of <span>Quranly</span> Unveiled
      </h2>
      <div className="testimonialContainer">
        <div className="scroller animated">
          <div className="scroller_inner">
            {storedReviews.map((review, index) => {
              return (
                <FallbackReviewCard
                  key={index}
                  review={review}
                  hidden={false}
                />
              )
            })}

            {storedReviews.map((review, index) => {
              return (
                <FallbackReviewCard key={index} review={review} hidden={true} />
              )
            })}
          </div>
          <div className="scroller animated ">
            <div className="scroller_inner reverse">
              {storedReviews.map((review, index) => {
                return <FallbackReviewCard key={index} review={review} />
              })}

              {storedReviews.map((review, index) => {
                return <FallbackReviewCard key={index} review={review} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FallbackReviews

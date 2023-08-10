export default function GetIamPage() {

    return (
      
      <main className="w-full flex-grow p-6">
          <h1 className="w-full text-3xl text-black pb-6">새로운 IAM 계정 추가</h1>
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                  <div className="leading-loose">
                      <form className="p-10 bg-white rounded shadow-xl">
                          <div className="">
                              <label className="block text-sm text-gray-600" htmlFor="name">Name</label>
                              <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" id="name" name="name" type="text" required={true} placeholder="Your Name" aria-label="Name"/>
                          </div>
                          <div className="mt-2">
                              <label className="block text-sm text-gray-600" htmlFor="AccessToken">AccessToken</label>
                              <textarea className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="AccessToken" name="AccessToken" rows={6} required={true} placeholder="Your AccessToken" aria-label="AccessToken"/>
                          </div>
                          <div className="mt-2">
                              <label className=" block text-sm text-gray-600" htmlFor="SecretToken">SecretToken</label>
                              <textarea className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" id="SecretToken" name="SecretToken" rows={6} required={true} placeholder="Your SecretToken" aria-label="SecretToken"></textarea>
                          </div>
                          <div className="mt-4">
                              <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
        </main>
  
    )
  }GetIamPage
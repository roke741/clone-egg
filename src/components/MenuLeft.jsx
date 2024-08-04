function MenuLeft() {
  return (
    <nav className="py-12 w-14 h-full bg-white z-20 fixed">
      <div className="h-full flex flex-col justify-center">
        <div className="mb-auto">
          <div className="pb-7 flex flex-col gap-7 items-center ">
            <div className="cursor-pointer w-5">
              <img src="https://app.egg.live/static/media/egg_no_shadow.a86c2e8509c468f2074a231b46ea8f65.svg" alt="EGG"/>
            </div>
            <div className="cursor-pointer">
              <svg 
                className="h-6" 
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M306.8 6.3C311.4 2.2 317.3 0 323.4 0c17.2 0 29.2 17.1 23.4 33.3L278.7 224 389 224c14.9 0 27 12.1 27 27c0 7.8-3.3 15.1-9.1 20.3L141.1 505.8c-4.5 4-10.4 6.2-16.5 6.2c-17.2 0-29.2-17.1-23.5-33.3L169.3 288 57.8 288C43.6 288 32 276.4 32 262.2c0-7.4 3.2-14.4 8.7-19.3L306.8 6.3zm.5 42.4L74.1 256 192 256c5.2 0 10.1 2.5 13.1 6.8s3.7 9.7 2 14.6L140.6 463.6 375.8 256 256 256c-5.2 0-10.1-2.5-13.1-6.8s-3.7-9.7-2-14.6l66.4-186z"></path></svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center">
          <div>
            <div className="w-7 h-7 flex justify-center items-center cursor-pointer">
              <span className="w-full h-full flex justify-center items-center text-[10px] font-bold border border-slate-600  rounded-full"> 
                JJ
              </span>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEvtVktOwzAQfc4C2CCyZdXcgLCgZUePYE5AOQG5AXCDcgLgBPgIYYcKixyhEhcoYlcQZsZOCFHzQ0lYeaSqicd+b+aNHY8A25GcwcMZPU3Ne1+mkUAjxgeukaiVwFhKCDz0hV+Ko6GwUKdMFhPZyaBkDP6+2hWYSD04kSFb7zuy7ko7Gbtr6HZjLxo6GZ2MTQqUfq407mkdX6h7Tesr/RqP5PMJ4+BnzgYZX+MLdYhQ+thCRBOjP5EyyReu8KLitNW4rSZjD1/ha5xzz2AmcttgM53S/6iQjcYbvSfkU+b3pJbGP5ER4VzSmF9PlqPdUZQ3eFZJgYCz3iGQDDhz8vi2aZpYkWBD4pZXDEcbU6RLaBEXQDwdUkABdWYhjXPm1WbIxpJlyAtZu6KDM81sThAXHWDaLTVkdudxgYdt5wxZZscywGdJYZvi9kyteEMEtQEXyJpA2/itSkyeHZf8w9A72e+A7FGYpUdhZJvU/7CQSpSo128v0aLQF5LFFQAAAABJRU5ErkJggg==" width="20" alt="Intercom Button"/>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <svg 
                className="h-5 " 
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 176 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L356.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l96 0z"></path></svg>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default MenuLeft;
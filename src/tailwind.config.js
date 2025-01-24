/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Đảm bảo quét tất cả các file trong dự án
    ],
    theme: {
      extend: {
        colors: {
          // Bạn có thể mở rộng thêm màu sắc ở đây
          primary: '#ff6347',
          secondary: '#4b8b3b',
        },
        fontFamily: {
          // Bạn có thể thêm font cho dự án ở đây
          sans: ['Time New Roman','serif'],
        },
      },
    },
    plugins: [],
  }
  
import { AiFillInfoCircle } from "react-icons/ai";

const ConfirmModal = ({ isOpen, onConfirm, onCancel, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-[400px]">
        <div className="flex justify-center flex-col text-center ">
          <AiFillInfoCircle className="text-6xl text-pink-200 flex w-full text-center my-4" />
          <p className="mb-4 text-black font-sans text-2xl whitespace-nowrap text-center flex justify-center">
            <span className="font-bold text-pink-600">해당 유저</span>를
            선택하시겠습니까?
          </p>

          <p className="text-black whitespace-nowrap">
            유저를 선택하면{" "}
            <span className="font-bold text-blue-500">해당 유저의</span>
            <br />
            <span className="font-bold text-blue-500">인스타 아이디를 </span>
            조회할 수 있습니다
          </p>

          <p className="mb-7 text-neutral-500 whitespace-nowrap pt-10 pb-4 font-normal">
            유저 선택 후에는 <br />
            <span className="font-normal text-red-600">
              다른 유저의 카드를 조회할 수 없습니다
            </span>
          </p>
        </div>
        <div className="flex gap-4 w-full px-10">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-white px-4 py-3 w-full rounded-xl hover:bg-gray-400"
          >
            아니오
          </button>
          <button
            onClick={onConfirm}
            className="bg-pink-300 text-white px-4 w-full py-3 rounded-xl hover:bg-pink-400"
            disabled={loading}
          >
            {loading ? "..." : "네"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

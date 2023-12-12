import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const EditTodo = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { id } = useParams<{ id: string }>();

  const closeModal = () => {
    return navigate('/');
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (title: string) =>
      axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: false,
        id: Number(id),
        title,
        userId: 0,
        tableId: 0,
      }),
    onSuccess: (data) => {
      console.log('TODO успешно изменен:', data);
      navigate('/');
    },
    onError: (error) => {
      console.error('Ошибка при изменении TODO:', error);
    },
  });

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative top-1/4 left-0 right-0 m-auto w-full max-w-md max-h-full">
        <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Изменение TODO</h3>
            <form onSubmit={handleSubmit(({ title }) => mutate(title))}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Новое наименование TODO
                  </label>
                  <input
                    {...register('title')}
                    className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full text-white bg-blue-700 disabled:border-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  Добавить
                </button>

                <button
                  onClick={closeModal}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Отменить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

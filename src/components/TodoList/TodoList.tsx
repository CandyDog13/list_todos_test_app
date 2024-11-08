import { FC } from "react";
import styles from "./TodoList.module.css";
import cn from "classnames";

export interface ICard {
  name: string;
  userId: number;
  email: string;
  countTasks: number;
}

interface ITodoList {
  list: ICard[] | [];
}

const TodoList: FC<ITodoList> = ({ list }) => {
  return (
    <>
      {list?.length > 0 ? (
        <div className={styles.table}>
          <div className={cn(styles.top_table, styles.top_table_bg_color)}>
            <div className={cn(styles.table_names, styles.centered_element)}>
              #
            </div>
            <div className={styles.table_names}>Username</div>
            <div className={styles.table_names}>todo-count</div>
          </div>
          <ul className={styles.todo_list}>
            {list.map((entry, index) => (
              <div className="todo">
                <li key={index} className={cn(styles.list, styles.top_table)}>
                  <span
                    className={cn(styles.list_index, styles.centered_element)}
                  >
                    {index + 1}
                  </span>
                  <div className={styles.user_info}>
                    <div className={styles.user_info_pic}>
                      <svg className={styles.pic_size}
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.2553 11.8233C14.4619 11.4121 14.9628 11.2461 15.3741 11.4527C16.7361 12.1369 17.8874 13.2262 18.7207 14.5685C18.8469 14.7718 19.0307 15.0434 19.0877 15.4114C19.1488 15.8054 19.0419 16.1821 18.8825 16.4686C18.7232 16.7551 18.4595 17.0447 18.0925 17.2006C17.7436 17.3488 17.3641 17.3333 17.0833 17.3333C16.6231 17.3333 16.25 16.9602 16.25 16.5C16.25 16.0398 16.6231 15.6667 17.0833 15.6667C17.2627 15.6667 17.357 15.6661 17.4242 15.6615L17.426 15.6585C17.4419 15.6298 17.3209 15.4736 17.3047 15.4475C16.6194 14.3437 15.6904 13.4768 14.6259 12.942C14.2147 12.7355 14.0487 12.2346 14.2553 11.8233Z"
                          fill="white"
                          fill-opacity="0.5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5871 1.51893C12.7919 1.10678 13.292 0.938707 13.7042 1.14353C15.2113 1.89251 16.25 3.44919 16.25 5.24999C16.25 7.05079 15.2113 8.60747 13.7042 9.35645C13.292 9.56127 12.7919 9.3932 12.5871 8.98105C12.3823 8.5689 12.5503 8.06875 12.9625 7.86393C13.9249 7.38566 14.5833 6.39396 14.5833 5.24999C14.5833 4.10602 13.9249 3.11432 12.9625 2.63605C12.5503 2.43123 12.3823 1.93108 12.5871 1.51893Z"
                          fill="white"
                          fill-opacity="0.5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.33333 5.24999C3.33333 2.71868 5.38536 0.666656 7.91667 0.666656C10.448 0.666656 12.5 2.71868 12.5 5.24999C12.5 7.7813 10.448 9.83332 7.91667 9.83332C5.38536 9.83332 3.33333 7.7813 3.33333 5.24999Z"
                          fill="white"
                          fill-opacity="0.5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.91667 10.6667C10.5802 10.6667 12.9613 12.1701 14.4143 14.3501C14.5423 14.5421 14.6788 14.747 14.7742 14.9416C14.8891 15.1759 14.9716 15.4451 14.9523 15.7665C14.9369 16.0229 14.8519 16.2607 14.7508 16.4496C14.6496 16.6384 14.4988 16.841 14.294 16.996C14.0195 17.2035 13.7238 17.2762 13.4624 17.3067C13.2322 17.3334 12.9596 17.3334 12.6849 17.3333C9.50732 17.3327 6.32724 17.3327 3.14839 17.3333C2.87377 17.3334 2.60115 17.3334 2.37096 17.3067C2.10954 17.2762 1.81379 17.2035 1.53937 16.996C1.33451 16.841 1.1837 16.6384 1.08258 16.4496C0.981458 16.2607 0.896415 16.0229 0.881026 15.7665C0.861731 15.4451 0.944231 15.1759 1.0591 14.9416C1.15454 14.747 1.29105 14.5421 1.41906 14.3501C2.87205 12.1701 5.25314 10.6667 7.91667 10.6667Z"
                          fill="white"
                          fill-opacity="0.5"
                        />
                      </svg>
                    </div>
                    <div className={styles.user_info_text}>
                      <span className={styles.user_info_text_header}>{entry.name}</span>
                      <span className={styles.user_info_text_email}>{entry.email}</span>
                    </div>
                  </div>
                  <span className={styles.list_index}>{entry.countTasks}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.empty}>
          <p>No information</p>
        </div>
      )}
    </>
  );
};

export default TodoList;

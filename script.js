* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #eef7f4;
    color: #263238;
    padding: 20px;
    transition: background 0.3s, color 0.3s;
}

body.dark {
    background: #18222b;
    color: #edf4f2;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.form-section,
.controls,
.stats,
.demo-section,
.pipeline {
    background: white;
    border: 2px solid #7ab7aa;
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 22px;
    box-shadow: 0 8px 18px #d5e7e2;
    transition: transform 0.25s, box-shadow 0.25s, background 0.3s;
}

.form-section:hover,
.controls:hover,
.stats:hover,
.demo-section:hover,
.pipeline:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px #c8ddd7;
}

body.dark .form-section,
body.dark .controls,
body.dark .stats,
body.dark .demo-section,
body.dark .pipeline,
body.dark .task-card {
    background: #24323b;
    box-shadow: none;
}

h1,
h2 {
    color: #2f7d72;
}

#taskForm,
.controls,
.task-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 12px;
}

input,
select,
button {
    padding: 10px;
    border: 2px solid #7ab7aa;
    border-radius: 6px;
    font-size: 16px;
    transition: transform 0.2s, background 0.2s, border-color 0.2s;
}

input,
select {
    background: white;
    color: #263238;
    transition: border-color 0.2s, box-shadow 0.2s;
}

button {
    background: #4c9a8b;
    color: white;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    transform: translateY(-2px);
    background: #3c8175;
    border-color: #3c8175;
}

button:active {
    transform: translateY(0);
}

input:focus,
select:focus {
    outline: none;
    border-color: #d9a441;
    box-shadow: 0 0 0 3px #f3dfb7;
}

#themeBtn {
    min-width: 110px;
}

#taskInput,
#searchInput {
    flex: 1;
    min-width: 220px;
}

.stats {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-weight: bold;
}

#taskContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 15px;
}

.task-card {
    background: white;
    border: 2px solid #7ab7aa;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 8px 18px #d5e7e2;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}

.task-card:hover {
    transform: translateY(-4px);
    border-color: #d9a441;
    box-shadow: 0 14px 26px #c8ddd7;
}

body.dark .task-card {
    box-shadow: none;
}

.task-title {
    margin-bottom: 8px;
}

.task-category {
    color: #2f7d72;
    margin-bottom: 12px;
    font-weight: bold;
}

body.dark .task-category,
body.dark h1,
body.dark h2,
body.dark .arrow {
    color: #9ed8cd;
}

.edit-btn {
    background: #d9a441;
    border-color: #d9a441;
    color: #1f2933;
}

.edit-btn:hover {
    background: #c7922d;
    border-color: #c7922d;
}

.complete-btn {
    background: #4f9d69;
    border-color: #4f9d69;
}

.complete-btn:hover {
    background: #3f8356;
    border-color: #3f8356;
}

.delete-btn {
    background: #d65a50;
    border-color: #d65a50;
}

.delete-btn:hover {
    background: #bd4b43;
    border-color: #bd4b43;
}

.completed {
    opacity: 0.6;
    text-decoration: line-through;
}

.demo-section p {
    margin-top: 8px;
}

#grandparent,
#parent {
    border: 2px solid #7ab7aa;
    border-radius: 10px;
    padding: 22px;
    margin-top: 15px;
    transition: transform 0.25s, background 0.25s;
}

#grandparent {
    background: #dff3ee;
}

#parent {
    background: #cce7e0;
}

#grandparent:hover,
#parent:hover {
    transform: scale(1.01);
}

body.dark #grandparent {
    background: #284841;
}

body.dark #parent {
    background: #315c53;
}

#childBtn {
    margin-top: 15px;
}

.event-log {
    margin-top: 15px;
    padding: 12px;
    border: 2px solid #7ab7aa;
    border-radius: 8px;
    min-height: 45px;
    background: #f7fbfa;
}

body.dark input,
body.dark select {
    background: #18222b;
    color: #edf4f2;
}

body.dark .event-log {
    background: #18222b;
}

.pipeline {
    text-align: center;
}

.flow-box {
    background: #4c9a8b;
    color: white;
    padding: 12px;
    border-radius: 8px;
    width: 260px;
    margin: 10px auto;
    font-weight: bold;
    transition: transform 0.25s, background 0.25s;
}

.flow-box:hover {
    transform: scale(1.04);
    background: #3c8175;
}

.arrow {
    color: #2f7d72;
    font-size: 22px;
}

@media (max-width: 700px) {
    #taskForm,
    .controls,
    .stats {
        flex-direction: column;
    }

    .flow-box {
        width: 100%;
    }
}
